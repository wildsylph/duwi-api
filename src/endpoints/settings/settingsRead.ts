import { D1ReadEndpoint } from "chanfana";
import { SettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingsRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: SettingsModel,
        fields: SettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
