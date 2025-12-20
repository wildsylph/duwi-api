import { Hono } from "hono";
import { fromHono } from "chanfana";
import { GuildSettingsList } from "./guildSettingsList";
import { GuildSettingsCreate } from "./guildSettingsCreate";
import { GuildSettingsRead } from "./guildSettingsRead";
import { GuildSettingsUpdate } from "./guildSettingsUpdate";
import { GuildSettingsDelete } from "./guildSettingsDelete";

export const guildSettingsRouter = fromHono(new Hono());

guildSettingsRouter.get("/", GuildSettingsList);
guildSettingsRouter.post("/", GuildSettingsCreate);
guildSettingsRouter.get("/:guild_id/:key", GuildSettingsRead);
guildSettingsRouter.put("/:guild_id/:key", GuildSettingsUpdate);
guildSettingsRouter.delete("/:guild_id/:key", GuildSettingsDelete);