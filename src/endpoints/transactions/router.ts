import { Hono } from "hono";
import { fromHono } from "chanfana";
import { TransactionCreate } from "./transactionCreate";
import { TransactionList } from "./transactionList";

export const transactionRouter = fromHono(new Hono());

transactionRouter.get("/", TransactionList);
transactionRouter.post("/", TransactionCreate);