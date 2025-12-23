import { Hono } from "hono";
import { fromHono } from "chanfana";
import { UserSettingsList } from "./userSettingsList";
import { UserSettingsCreate } from "./userSettingsCreate";
import { UserSettingsRead } from "./userSettingsRead";
import { UserSettingsUpdate } from "./userSettingsUpdate";
import { UserSettingsDelete } from "./userSettingsDelete";

export const userSettingsRouter = fromHono(new Hono());

userSettingsRouter.get("/:user_id", UserSettingsList);
userSettingsRouter.post("/", UserSettingsCreate);
userSettingsRouter.get("/:user_id/:key", UserSettingsRead);
userSettingsRouter.put("/:user_id/:key", UserSettingsUpdate);
userSettingsRouter.delete("/:user_id/:key", UserSettingsDelete);