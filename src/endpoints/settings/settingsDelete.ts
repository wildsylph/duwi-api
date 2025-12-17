import { D1DeleteEndpoint } from "chanfana";
import { SettingsModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingsDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: SettingsModel,
    };
}
