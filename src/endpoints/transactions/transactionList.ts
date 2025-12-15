import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { TransactionModel } from "./base";

export class TransactionList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: TransactionModel,
	};

	searchFields = ["rowid"];
}