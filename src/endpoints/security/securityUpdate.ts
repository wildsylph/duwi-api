import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SecurityModel } from "./base";

export class SecurityUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: SecurityModel,
		fields: SecurityModel.schema.pick({
			role_id: true,
		}),
	};
}