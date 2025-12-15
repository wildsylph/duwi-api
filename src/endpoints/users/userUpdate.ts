import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { UserModel } from "./base";

export class UserUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: UserModel,
		fields: UserModel.schema.pick({
			user_name: true,
		}),
	};
}