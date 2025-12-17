import { D1ReadEndpoint } from "chanfana";
import { SettingTypeModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingTypesRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: SettingTypeModel,
        fields: SettingTypeModel.schema.pick({
            key: true,
            value_type: true,
        }),
    };
}
