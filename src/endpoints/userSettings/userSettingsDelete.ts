import { D1DeleteEndpoint } from "chanfana";
import { UserSettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class UserSettingsDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: UserSettingsModel,
    };
}
