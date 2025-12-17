import { z } from "zod";

export const settings = z.object({
    guild_id: z.string(),
    key: z.string(),
    value: z.string(),
});

export const SettingsModel = {
    tableName: "settings",
    primaryKeys: ["guild_id", "key"],
    schema: settings,
};
