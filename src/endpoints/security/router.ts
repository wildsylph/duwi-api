import { Hono } from "hono";
import { fromHono } from "chanfana";
import { SecurityList } from "./securityList";
import { SecurityCreate } from "./securityCreate";
import { SecurityRead } from "./securityRead";
import { SecurityUpdate } from "./securityUpdate";
import { SecurityDelete } from "./securityDelete";

export const securityRouter = fromHono(new Hono());

securityRouter.get("/", SecurityList);
securityRouter.post("/", SecurityCreate);
securityRouter.get("/:guild_id", SecurityRead);
securityRouter.put("/:guild_id", SecurityUpdate);
securityRouter.delete("/:guild_id", SecurityDelete);