import { z } from "zod";

export const userSettings = z.object({
    guild_id: z.string(),
    key: z.string(),
    value: z.string(),
});

export const UserSettingsModel = {
    tableName: "user_settings",
    primaryKeys: ["guild_id", "key"],
    schema: userSettings,
};
