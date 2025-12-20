import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Security Endpoint", () => {
  it("GET /security should return success", async () => {
    const res = await SELF.fetch("http://local.test/security");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /security/test-guild should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/security/test-guild");
    expect([200, 404]).toContain(res.status);
  });
});
