import { D1ListEndpoint } from "chanfana";
import { SettingTypeModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingTypesList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: SettingTypeModel,
        fields: SettingTypeModel.schema.pick({
            key: true,
            value_type: true,
        }),
    };
}
