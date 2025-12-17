import { z } from "zod";

export const callTime = z.object({
    user_id: z.string(),
    channel_id: z.string(),
    timestamp: z.number(),
});

export const CallTimeModel = {
    tableName: "call_time",
    primaryKeys: ["user_id"],
    schema: callTime,
};