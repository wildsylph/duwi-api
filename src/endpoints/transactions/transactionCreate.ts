import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { TransactionModel } from "./base";

export class TransactionCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: TransactionModel,
	};
}
