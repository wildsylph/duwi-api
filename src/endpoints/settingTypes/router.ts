import { Hono } from "hono";
import { fromHono } from "chanfana";
import { SettingTypesList } from "./settingTypesList";
import { SettingTypesCreate } from "./settingTypesCreate";
import { SettingTypesRead } from "./settingTypesRead";
import { SettingTypesUpdate } from "./settingTypesUpdate";
import { SettingTypesDelete } from "./settingTypesDelete";

export const settingTypesRouter = fromHono(new Hono());

settingTypesRouter.get("/", SettingTypesList);
settingTypesRouter.post("/", SettingTypesCreate);
settingTypesRouter.get("/:key", SettingTypesRead);
settingTypesRouter.put("/:key", SettingTypesUpdate);
settingTypesRouter.delete("/:key", SettingTypesDelete);
