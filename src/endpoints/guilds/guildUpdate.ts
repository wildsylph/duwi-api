import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { GuildModel } from "./base";

export class GuildUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: GuildModel,
		fields: GuildModel.schema.pick({
			guild_name: true,
		}),
	};
}