import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { UserModel } from "./base";

export class UserList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: UserModel,
	};

	searchFields = ["user_id", "user_name"];
}