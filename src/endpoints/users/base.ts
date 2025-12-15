import { z } from "zod";

export const user = z.object({
    user_id: z.string(),
    user_name: z.string(),
});

export const UserModel = {
    tableName: "users",
    primaryKeys: ["user_id"],
    schema: user,
};