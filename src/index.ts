import { ApiException, fromHono } from "chanfana";
import { Hono } from "hono";
import { usersRouter } from "./endpoints/users/router";
import { guildsRouter } from "./endpoints/guilds/router";
import { securityRouter } from "./endpoints/security/router";
import { transactionRouter } from "./endpoints/transactions/router";
import { pointsRouter } from "./endpoints/points/router";
import { cumulativeCallTimeRouter } from "./endpoints/cumulativeCallTime/router";
import { callTimeRouter } from "./endpoints/callTime/router";
import { guildSettingsRouter } from "./endpoints/guildSettings/router";
import { userSettingsRouter } from "./endpoints/userSettings/router";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { authMiddleware } from "./authMiddleware";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

app.onError((err, c) => {
	if (err instanceof ApiException) {
		// If it's a Chanfana ApiException, let Chanfana handle the response
		return c.json(
			{ success: false, errors: err.buildResponse() },
			err.status as ContentfulStatusCode,
		);
	}

	console.error("Global error handler caught:", err); // Log the error if it's not known

	// For other errors, return a generic 500 response
	return c.json(
		{
			success: false,
			errors: [{ code: 7000, message: "Internal Server Error" }],
		},
		500,
	);
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
	schema: {
		info: {
			title: "DUWI API",
			version: "1.0.0",
			description: "This is the documentation for DUWI API, an API for all things DUWI related.",
		},
	},
});
// Apply authMiddleware to all routes except the docs route
app.use("/(?!$).*", authMiddleware);

// Register Tasks Sub router
openapi.route("/users", usersRouter);
openapi.route("/user-settings", userSettingsRouter);
openapi.route("/guilds", guildsRouter);
openapi.route("/guild-settings", guildSettingsRouter);
openapi.route("/security", securityRouter);
openapi.route("/points", pointsRouter);
openapi.route("/transactions", transactionRouter);
openapi.route("/call-time", callTimeRouter);
openapi.route("/cumulative-call-time", cumulativeCallTimeRouter);

// Export the Hono app
export default app;
