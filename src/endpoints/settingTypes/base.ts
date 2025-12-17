import { z } from "zod";

export const settingType = z.object({
    key: z.string(),
    value_type: z.string(),
});

export const SettingTypeModel = {
    tableName: "setting_types",
    primaryKeys: ["key"],
    schema: settingType,
};
