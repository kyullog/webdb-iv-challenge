const db = require("./dbConfig.js");

module.exports = {
  getDishes: () => {
    return db("dishes");
  }
};
