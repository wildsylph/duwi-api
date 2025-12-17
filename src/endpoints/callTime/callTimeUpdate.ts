import { D1UpdateEndpoint } from "chanfana";
import type { HandleArgs } from "../../types";
import { CallTimeModel } from "./base";

export class CallTimeUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: CallTimeModel,
        fields: CallTimeModel.schema.pick({
            timestamp: true,
        }),
    };
}
