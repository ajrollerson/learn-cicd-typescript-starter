import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "./api/auth.js";

const nullAuth: IncomingHttpHeaders = {
  potato: undefined,
};

const incorrectAuth: IncomingHttpHeaders = {
  authorization: "Basic QWxhZGRpbjpPcGVuU2VzYW1l",
};

const correct: IncomingHttpHeaders = {
  authorization: "ApiKey QWxhZGRpbjpPcGVuU2VzYW1l",
};

describe("authorization", () => {
  test("null header", () => {
    expect(getAPIKey(nullAuth)).toBeNull();
  });

  test("malformed auth header", () => {
    expect(getAPIKey(incorrectAuth)).toBeNull();
  });

  test("Correct auth header", () => {
    expect(getAPIKey(correct)).toBe("QWxhZGRpbjpPcGVuU2VzYW1l");
  });
});
