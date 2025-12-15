import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { UserModel } from "./base";

export class UserDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: UserModel,
	};
}