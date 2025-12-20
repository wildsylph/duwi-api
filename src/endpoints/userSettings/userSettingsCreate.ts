import { D1CreateEndpoint } from "chanfana";
import { UserSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class UserSettingsCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: UserSettingsModel,
        fields: UserSettingsModel.schema.pick({
            user_id: true,
            key: true,
            value: true,
        }),
    };
}
