import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("GuildSettings Endpoint", () => {
  it("GET /guild-settings should return success", async () => {
    const res = await SELF.fetch("http://local.test/guild-settings");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /guild-settings/test-guild/test-key should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/guild-settings/test-guild/test-key");
    expect([200, 404]).toContain(res.status);
  });
});
