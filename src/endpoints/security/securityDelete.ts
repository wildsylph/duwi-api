import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SecurityModel } from "./base";

export class SecurityDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: SecurityModel,
	};
}