import { Hono } from "hono";
import { fromHono } from "chanfana";
import { CumulativeCallTimeList } from "./cumulativeCallTimeList";
import { CumulativeCallTimeCreate } from "./cumulativeCallTimeCreate";
import { CumulativeCallTimeRead } from "./cumulativeCallTimeRead";
import { CumulativeCallTimeUpdate } from "./cumulativeCallTimeUpdate";
import { CumulativeCallTimeDelete } from "./cumulativeCallTimeDelete";

export const cumulativeCallTimeRouter = fromHono(new Hono());

cumulativeCallTimeRouter.get("/", CumulativeCallTimeList);
cumulativeCallTimeRouter.post("/", CumulativeCallTimeCreate);
cumulativeCallTimeRouter.get("/:user_id/:guild_id", CumulativeCallTimeRead);
cumulativeCallTimeRouter.put("/:user_id/:guild_id", CumulativeCallTimeUpdate);
cumulativeCallTimeRouter.delete("/:user_id/:guild_id", CumulativeCallTimeDelete);
