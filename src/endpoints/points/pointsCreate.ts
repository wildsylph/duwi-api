import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PointsModel } from "./base";

export class PointsCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: PointsModel,
    fields: PointsModel.schema.pick({
      user_id: true,
      guild_id: true,
      points: true,
    }),
  };
}
