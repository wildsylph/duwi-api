import { D1CreateEndpoint } from "chanfana";
import { GuildSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class GuildSettingsCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: GuildSettingsModel,
        fields: GuildSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
