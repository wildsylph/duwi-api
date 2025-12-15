import { ApiException, fromHono } from "chanfana";
import { Hono } from "hono";
import { usersRouter } from "./endpoints/users/router";
import { guildsRouter } from "./endpoints/guilds/router";
import { securityRouter } from "./endpoints/security/router";
import { transactionRouter } from "./endpoints/transactions/router";
import { pointsRouter } from "./endpoints/points/router";
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
// Apply to all routes (global protection)
app.use(authMiddleware);

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
	schema: {
		info: {
			title: "DUWI API",
			version: "2.0.0",
			description: "This is the documentation for DUWI API, an API for all things DUWI related.",
		},
	},
});

// Register Tasks Sub router
openapi.route("/users", usersRouter);
openapi.route("/guilds", guildsRouter);
openapi.route("/security", securityRouter);
openapi.route("/transactions", transactionRouter);
openapi.route("/points", pointsRouter);

// Export the Hono app
export default app;
