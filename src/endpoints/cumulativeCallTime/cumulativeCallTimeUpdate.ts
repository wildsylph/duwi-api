import { D1UpdateEndpoint } from "chanfana";
import { CumulativeCallTimeModel } from "./base";
import type { HandleArgs } from "../../types";

export class CumulativeCallTimeUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: CumulativeCallTimeModel,
        fields: CumulativeCallTimeModel.schema.pick({
            user_id: true,
            guild_id: true,
            seconds: true,
        }),
    };
}
