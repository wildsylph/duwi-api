import { z } from "zod";

export const userSettings = z.object({
    user_id: z.string(),
    key: z.string(),
    value: z.string(),
});

export const UserSettingsModel = {
    tableName: "user_settings",
    primaryKeys: ["user_id", "key"],
    schema: userSettings,
};
