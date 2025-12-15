import { z } from "zod";

export const transaction = z.object({
    user_id: z.string(),
    guild_id: z.string(),
    points: z.number(),
    transacted_by: z.string(),
    timestamp: z.string(),
});

export const TransactionModel = {
    tableName: "transactions",
    primaryKeys: ["rowid"],
    schema: transaction,
};