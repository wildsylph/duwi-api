import { D1UpdateEndpoint } from "chanfana";
import { GuildSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class GuildSettingsUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: GuildSettingsModel,
        fields: GuildSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
