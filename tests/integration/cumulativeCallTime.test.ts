import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("CumulativeCallTime Endpoint", () => {
  it("GET /cumulative-call-time should return success", async () => {
    const res = await SELF.fetch("http://local.test/cumulative-call-time");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /cumulative-call-time/test-user/test-guild should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/cumulative-call-time/test-user/test-guild");
    expect([200, 404]).toContain(res.status);
  });
});
