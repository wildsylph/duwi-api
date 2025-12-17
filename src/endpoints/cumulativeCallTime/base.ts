import { z } from "zod";

export const cumulativeCallTime = z.object({
    user_id: z.string(),
    guild_id: z.string(),
    seconds: z.number(),
});

export const CumulativeCallTimeModel = {
    tableName: "cumulative_call_time",
    primaryKeys: ["user_id", "guild_id"],
    schema: cumulativeCallTime,
};
