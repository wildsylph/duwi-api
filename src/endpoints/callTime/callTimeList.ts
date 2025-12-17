import { D1ListEndpoint } from "chanfana";
import type { HandleArgs } from "../../types";
import { CallTimeModel } from "./base";

export class CallTimeList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: CallTimeModel,
    };

    searchFields = ["user_id", "channel_id"]
}
