import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@100xdevs/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

const getPrismaClient = (c: Hono["context"]) => {
  return new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
};


//signup route----------------------------------->

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const { success, error } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({
      message: "Invalid inputs",
      error: error?.issues,
    });
  }

  try {
    const prisma = getPrismaClient(c);
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );


    return c.json({
      message: "Signup successfull",
      token: jwt
    });

  } catch (e) {
    console.error("Error in creating user:", e);
    c.status(500);
    return c.text("Internal server error");
  }
});


//signin route--------------------------->

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const { success, error } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({
      message: "Invalid inputs",
      error: error?.issues,
    });
  }

  try {
    const prisma = getPrismaClient(c);
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        message: "Incorrect credentials",
      });
    }

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      message: "Signin successfull",
      token: jwt
    });
  } catch (e) {
    console.error("Error in logging", e);
    c.status(500);
    return c.text("Internal server error");
  }
});
