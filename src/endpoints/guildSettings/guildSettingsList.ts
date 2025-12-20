import { D1ListEndpoint } from "chanfana";
import { GuildSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class GuildSettingsList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: GuildSettingsModel,
        fields: GuildSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
