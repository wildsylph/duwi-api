import { D1UpdateEndpoint } from "chanfana";
import { UserSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class UserSettingsUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: UserSettingsModel,
        fields: UserSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
