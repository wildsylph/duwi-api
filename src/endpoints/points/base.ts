import { z } from "zod";

export const points = z.object({
    user_id: z.string(),
    guild_id: z.string(),
    points: z.number(),
});

export const PointsModel = {
    tableName: "points",
    primaryKeys: ["user_id", "guild_id"],
    schema: points,
};