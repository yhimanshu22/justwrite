import { Context, Next } from 'hono';
import { verify } from 'hono/jwt';

export async function authMiddleware(c: Context, next: Next) {
    const authHeader = c.req.header('authorization') || '';

    try {
        const user = await verifyToken(authHeader, c.env.JWT_SECRET);

        if (user) {
            c.set('userId', user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: 'You are not logged in',
            });
        }
    } catch (e) {
        c.status(403);
        return c.json({
            message: 'You are not logged in',
        });
    }
}

async function verifyToken(token: string, secret: string) {
    try {
        return await verify(token, secret) as { id: string };
    } catch (error) {
        throw new Error('Invalid token');
    }
}
