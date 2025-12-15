import { z } from "zod";

export const security = z.object({
	guild_id: z.string(),
	role_id: z.string(),
});

export const SecurityModel = {
	tableName: "security",
	primaryKeys: ["guild_id"],
	schema: security,
};