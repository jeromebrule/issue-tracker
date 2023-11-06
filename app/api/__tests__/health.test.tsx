// Import the route file and the library
import { GET } from "../route";
import { createRequest, createResponse } from "node-mocks-http";
import "isomorphic-fetch";

describe("API health", () => {
  test("should return a API status", async () => {
    const req = createRequest({
      method: "GET",
      url: "/api",
    });

    const res = await GET();

    expect(await res.json()).toEqual({
      message: "API is running smoothly",
      status: 200,
    });
  });
});
