import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("CallTime Endpoint", () => {
  it("GET /call-time should return success", async () => {
    const res = await SELF.fetch("http://local.test/call-time");
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body).toHaveProperty("success", true);
  });
  it("GET /call-time/test-user should return 200 or 404", async () => {
    const res = await SELF.fetch("http://local.test/call-time/test-user");
    expect([200, 404]).toContain(res.status);
  });
});
