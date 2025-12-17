import { D1DeleteEndpoint } from "chanfana";
import { CumulativeCallTimeModel } from "./base";
import type { HandleArgs } from "../../types";

export class CumulativeCallTimeDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: CumulativeCallTimeModel,
    };
}
