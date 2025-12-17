import { D1DeleteEndpoint } from "chanfana";
import type { HandleArgs } from "../../types";
import { CallTimeModel } from "./base";

export class CallTimeDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: CallTimeModel,
    };
}