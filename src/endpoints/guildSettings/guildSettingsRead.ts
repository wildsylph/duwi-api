import { D1ReadEndpoint } from "chanfana";
import { GuildSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class GuildSettingsRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: GuildSettingsModel,
        fields: GuildSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
