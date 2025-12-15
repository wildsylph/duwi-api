import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PointsModel } from "./base";

export class PointsDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: PointsModel,
    };
}
