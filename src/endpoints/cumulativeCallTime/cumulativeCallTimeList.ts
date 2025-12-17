import { D1ListEndpoint } from "chanfana";
import { CumulativeCallTimeModel } from "./base";
import type { HandleArgs } from "../../types";

export class CumulativeCallTimeList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: CumulativeCallTimeModel,
        fields: CumulativeCallTimeModel.schema.pick({
            user_id: true,
            guild_id: true,
            seconds: true,
        }),
    };
}
