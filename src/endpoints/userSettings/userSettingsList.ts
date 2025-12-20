import { D1ListEndpoint } from "chanfana";
import { UserSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class UserSettingsList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: UserSettingsModel,
        fields: UserSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
