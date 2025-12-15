import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PointsModel } from "./base";

export class PointsUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: PointsModel,
    fields: PointsModel.schema.pick({
      points: true,
    }),
  };
}