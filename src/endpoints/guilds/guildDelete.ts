import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { GuildModel } from "./base";

export class GuildDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: GuildModel,
	};
}