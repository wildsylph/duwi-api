import { D1ReadEndpoint } from "chanfana";
import { CumulativeCallTimeModel } from "./base";
import type { HandleArgs } from "../../types";

export class CumulativeCallTimeRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: CumulativeCallTimeModel,
        fields: CumulativeCallTimeModel.schema.pick({
            user_id: true,
            guild_id: true,
            seconds: true,
        }),
    };
}
