import { D1ReadEndpoint } from "chanfana";
import { UserSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class UserSettingsRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: UserSettingsModel,
        fields: UserSettingsModel.schema.pick({
            guild_id: true,
            key: true,
            value: true,
        }),
    };
}
