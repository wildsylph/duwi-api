import { D1CreateEndpoint } from "chanfana";
import { SettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingsCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: SettingsModel,
        fields: SettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
