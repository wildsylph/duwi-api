import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SecurityModel } from "./base";

export class SecurityList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: SecurityModel,
	};

	searchFields = ["guild_id"];
}