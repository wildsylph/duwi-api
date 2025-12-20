import { z } from "zod";

export const guildSettings = z.object({
    guild_id: z.string(),
    key: z.string(),
    value: z.string(),
});

export const GuildSettingsModel = {
    tableName: "guild_settings",
    primaryKeys: ["guild_id", "key"],
    schema: guildSettings,
};
