import { D1CreateEndpoint } from "chanfana";
import type { HandleArgs } from "../../types";
import { CallTimeModel } from "./base";

export class CallTimeCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: CallTimeModel,
        fields: CallTimeModel.schema.pick({
            user_id: true,
            channel_id: true,
            timestamp: true,
        }),
    };
}