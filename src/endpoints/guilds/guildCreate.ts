import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { GuildModel } from "./base";

export class GuildCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: GuildModel,
    fields: GuildModel.schema.pick({
			guild_id: true,
			guild_name: true,
		}),
	};
}