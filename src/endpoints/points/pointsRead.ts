import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PointsModel } from "./base";

export class PointsRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: PointsModel,
	};
}
