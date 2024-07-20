import { createBlogInput, updateBlogInput } from "@100xdevs/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { authMiddleware } from "../Authmiddleware";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
        GEMINI_API_KEY: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.post('/*', authMiddleware)

blogRouter.post('/publish', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    })

    return c.json({
        id: blog.id
    })
})
blogRouter.put('/', authMiddleware, async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id: blog.id
    })
})

// Todo: add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return c.json({
            blog
        });
    } catch (e) {
        c.status(411); // 4
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})

export const runtime = 'edge';

// generate with ai------------------->
blogRouter.post('/with-ai', async (c) => {
    const genAI = new GoogleGenerativeAI(c.env.GEMINI_API_KEY || '');

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        const data = await c.req.json();
        const prompt = `Write a blog post based on the title: "${data.title}". The content should be in plain text format and should not include any headings, titles, or special characters such as \`***\`. 

        1. **Introduction**: Provide a brief introduction to the topic.
        2. **Main Body**: 
         - Divide the main body into multiple sections (at least 4) without using any headings or special formatting.
         - Ensure the content flows logically from one section to the next.
        3. **Conclusion**: 
         - Summarize the key points.
         - Include a call to action inviting readers to leave comments or share their thoughts.

       Ensure that the content is cohesive, engaging, and free of any markdown or special formatting elements. Focus on creating a natural, readable text that aligns with the blog title and provides value to the readers.`;



        const result = await model.generateContentStream(prompt);
        const response = await result.response;


        let content = await response.text();

        content = content.replace(/##\s*/g, '').replace(/^\s*#\s*/gm, '');

        return new Response(JSON.stringify({ content: content }));
    } catch (error) {
        console.error('Error generating content:', error);
        return new Response(JSON.stringify({ error: 'An error occurred while generating the blog post' }), {
            status: 500
        });
    }
});





