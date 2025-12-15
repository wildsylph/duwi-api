import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { GuildModel } from "./base";

export class GuildList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: GuildModel,
	};

	searchFields = ["guild_id"];
}