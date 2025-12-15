import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SecurityModel } from "./base";

export class SecurityRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: SecurityModel,
	};
}