import { z } from "zod";

export const guild = z.object({
    guild_id: z.string(),
    guild_name: z.string(),
});

export const GuildModel = {
    tableName: "guilds",
    primaryKeys: ["guild_id"],
    schema: guild,
};