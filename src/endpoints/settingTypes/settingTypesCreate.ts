import { D1CreateEndpoint } from "chanfana";
import { SettingTypeModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingTypesCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: SettingTypeModel,
        fields: SettingTypeModel.schema.pick({
            key: true,
            value_type: true,
        }),
    };
}
