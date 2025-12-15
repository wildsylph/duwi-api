import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { GuildModel } from "./base";

export class GuildRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: GuildModel,
	};
}