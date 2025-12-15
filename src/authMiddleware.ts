import type { Context, Next } from "hono";

export const authMiddleware = async (c: Context, next: Next) => {
  const auth = c.req.header("Authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    return c.text("Unauthorized", 401);
  }
  const token = auth.slice(7);
  const SECRET =  c.env.duwidbsecret;
  // Validate token (e.g., check against DB or decode JWT)
  if (token !== SECRET) {
    return c.text("Forbidden", 403);
  }
  // Optionally attach user info to context: c.set("user", user)
  await next();
};