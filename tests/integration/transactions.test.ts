import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Transactions Endpoint", () => {
  it("GET /transactions should return success", async () => {
    const res = await SELF.fetch("http://local.test/transactions");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /transactions/test-user/test-guild should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/transactions/test-user/test-guild");
    expect([200, 404]).toContain(res.status);
  });
});
