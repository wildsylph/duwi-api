import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Guilds Endpoint", () => {
  it("GET /guilds should return success", async () => {
    const res = await SELF.fetch("http://local.test/guilds");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /guilds/test-guild should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/guilds/test-guild");
    expect([200, 404]).toContain(res.status);
  });
});
