import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { UserModel } from "./base";

export class UserCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: UserModel,
    fields: UserModel.schema.pick({
			user_id: true,
			user_name: true,
		}),
	};
}