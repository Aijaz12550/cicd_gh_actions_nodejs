const { add } = require("../math");

// ##syncronus test code

test("Adding Numbers 2 and 5", () => {
  let sum = add(2, 5);
  expect(sum).toBe(7);
});

// ## async test case. done param of callback is for async

test("async test case", (done) => {
  let a = 2;
  setTimeout(() => {
    if (a < 2) {
      throw new Error("Error");
    }
    done();
  }, 2000);
});
