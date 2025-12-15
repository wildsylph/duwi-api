import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { UserModel } from "./base";

export class UserRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: UserModel,
	};
}