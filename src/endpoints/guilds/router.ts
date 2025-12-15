import { Hono } from "hono";
import { fromHono } from "chanfana";
import { GuildList } from "./guildList";
import { GuildCreate } from "./guildCreate";
import { GuildRead } from "./guildRead";
import { GuildUpdate } from "./guildUpdate";
import { GuildDelete } from "./guildDelete";

export const guildsRouter = fromHono(new Hono());

guildsRouter.get("/", GuildList);
guildsRouter.post("/", GuildCreate);
guildsRouter.get("/:guild_id", GuildRead);
guildsRouter.put("/:guild_id", GuildUpdate);
guildsRouter.delete("/:guild_id", GuildDelete);