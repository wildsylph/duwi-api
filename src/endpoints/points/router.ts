import { Hono } from "hono";
import { fromHono } from "chanfana";
import { PointsList } from "./pointsList";
import { PointsCreate } from "./pointsCreate";
import { PointsRead } from "./pointsRead";
import { PointsUpdate } from "./pointsUpdate";
import { PointsDelete } from "./pointsDelete";

export const pointsRouter = fromHono(new Hono());

pointsRouter.get("/:guild_id", PointsList);
pointsRouter.post("/", PointsCreate);
pointsRouter.get("/:user_id/:guild_id", PointsRead);
pointsRouter.put("/:user_id/:guild_id", PointsUpdate);
pointsRouter.delete("/:user_id/:guild_id", PointsDelete);
