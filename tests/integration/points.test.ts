import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Points Endpoint", () => {
  it("GET /points/test-guild should return success", async () => {
    const res = await SELF.fetch("http://local.test/points/test-guild");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /points/test-user/test-guild should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/points/test-user/test-guild");
    expect([200, 404]).toContain(res.status);
  });
});
