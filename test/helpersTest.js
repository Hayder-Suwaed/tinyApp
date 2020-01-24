const { assert } = require("chai");
const { emailLookup } = require("../helper");

const users = {
  "userRandomID": {
    id: "userRandomID", 
    email: "user@example.com", 
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID", 
    email: "user2@example.com", 
    password: "dishwasher-funk"
  }
};


describe("emailLookup", () => {
  it("should return the user's id with valid email", () => {
    const userID = emailLookup(users, "user@example.com");
    const expectedOutput = "userRandomID";
    
    assert.equal(userID, expectedOutput);
  });

  it("should return undefined with email not included in user's database", () => {
    const userID = emailLookup(users, "some@email.com");
    const expectedOutput = undefined;

    assert.equal(userID, expectedOutput);
  });
});

