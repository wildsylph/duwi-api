import { D1ListEndpoint } from "chanfana";
import { SettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingsList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: SettingsModel,
        fields: SettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
