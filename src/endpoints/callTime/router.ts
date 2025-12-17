import { Hono } from "hono";
import { fromHono } from "chanfana";
import { CallTimeList } from "./callTimeList";
import { CallTimeCreate } from "./callTimeCreate";
import { CallTimeRead } from "./callTimeRead";
import { CallTimeUpdate } from "./callTimeUpdate";
import { CallTimeDelete } from "./callTimeDelete";

export const callTimeRouter = fromHono(new Hono());

callTimeRouter.get("/", CallTimeList);
callTimeRouter.post("/", CallTimeCreate);
callTimeRouter.get("/:user_id", CallTimeRead);
callTimeRouter.put("/:user_id", CallTimeUpdate);
callTimeRouter.delete("/:user_id", CallTimeDelete);
