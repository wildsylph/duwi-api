import { D1UpdateEndpoint } from "chanfana";
import { SettingTypeModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingTypesUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: SettingTypeModel,
        fields: SettingTypeModel.schema.pick({
            key: true,
            value_type: true,
        }),
    };
}
