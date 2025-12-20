import { D1DeleteEndpoint } from "chanfana";
import { GuildSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class GuildSettingsDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: GuildSettingsModel,
    };
}
