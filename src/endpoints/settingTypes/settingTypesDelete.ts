import { D1DeleteEndpoint } from "chanfana";
import { SettingTypeModel } from "./base";
import type { HandleArgs } from "../../types";

export class SettingTypesDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: SettingTypeModel,
    };
}
