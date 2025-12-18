import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PointsModel } from "./base";

export class PointsList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: PointsModel,
  };
  defaultOrderBy = 'points DESC'
}