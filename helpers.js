const bcrypt = require('bcrypt');


const emailLookup = function(database, emailAdress) {
  let ids = Object.values(database);
  for (let user of ids) {
    if (user.email === emailAdress) {
      return user.id;
    } 
  }
  return undefined;
};

const generateRandomString = function(length) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let output = "";
  for (let i = 0; i < length; i++) {
    output += characters[Math.floor(Math.random() * characters.length)];
  }
  return output;
};
 


const generateUsers = function(email, password) {
  let id = generateRandomString(9);
  let userInfo = {
    id: id,
    email: email,
    password: bcrypt.hashSync(password, 10)
  }
  return userInfo;
}

module.exports = { emailLookup, generateRandomString, generateUsers };