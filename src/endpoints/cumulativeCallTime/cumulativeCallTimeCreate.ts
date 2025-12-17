import { D1CreateEndpoint } from "chanfana";
import { CumulativeCallTimeModel } from "./base";
import type { HandleArgs } from "../../types";

export class CumulativeCallTimeCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: CumulativeCallTimeModel,
        fields: CumulativeCallTimeModel.schema.pick({
            user_id: true,
            guild_id: true,
            seconds: true,
        }),
    };
}
