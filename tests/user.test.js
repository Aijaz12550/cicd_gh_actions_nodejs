const request = require("supertest");
const app = require("../app");
const User = require("../models/users");

test("get mongodb uri", async (done) => {
  let result = await request(app).get("/test");
  console.log("result", result.body.a);
  expect(result.body.a).toBe("qqq");
  done();
});

test("db test 1 add user", async () => {
  let result = new User({ name: "aijaz" });
  let res = await result.save();
});

test("db test 2 get user", async () => {
  let user = await User.findOne({ name: "aijaz" });
  expect(user.name).toBe("aijaz");
});

test("register user", async () => {
  let name = "aijaz 123";
  let result = await request(app).post("/add/user").send({ name }).expect(200);

  expect(result.body).toMatchObject({ name });

  console.log("result register =====> ======>", result);
});
