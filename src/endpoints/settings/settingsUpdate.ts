import { D1UpdateEndpoint } from "chanfana";
import { SettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingsUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: SettingsModel,
        fields: SettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
