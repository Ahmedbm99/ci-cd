const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should return Hello World!!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});


describe("GET /test", () => {
  it("should return test successfuly!", async () => {
    const res = await request(app).get("/test");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("testing");
  });
});
