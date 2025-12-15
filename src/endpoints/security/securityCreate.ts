import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SecurityModel } from "./base";

export class SecurityCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: SecurityModel,
    fields: SecurityModel.schema.pick({
			guild_id: true,
			role_id: true,
		}),
	};
}