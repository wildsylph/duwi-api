import { D1ReadEndpoint } from "chanfana";
import type { HandleArgs } from "../../types";
import { CallTimeModel } from "./base";

export class CallTimeRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: CallTimeModel,
    };
}
