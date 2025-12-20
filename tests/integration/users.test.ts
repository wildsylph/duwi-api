import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Users Endpoint", () => {
  it("GET /users should return success", async () => {
    const res = await SELF.fetch("http://local.test/users");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /users/test-user should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/users/test-user");
    expect([200, 404]).toContain(res.status);
  });
});
