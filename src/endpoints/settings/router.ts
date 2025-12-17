import { Hono } from "hono";
import { fromHono } from "chanfana";
import { SettingsList } from "./settingsList";
import { SettingsCreate } from "./settingsCreate";
import { SettingsRead } from "./settingsRead";
import { SettingsUpdate } from "./settingsUpdate";
import { SettingsDelete } from "./settingsDelete";

export const settingsRouter = fromHono(new Hono());

settingsRouter.get("/", SettingsList);
settingsRouter.post("/", SettingsCreate);
settingsRouter.get("/:guild_id/:key", SettingsRead);
settingsRouter.put("/:guild_id/:key", SettingsUpdate);
settingsRouter.delete("/:guild_id/:key", SettingsDelete);
