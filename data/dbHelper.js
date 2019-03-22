const db = require("./dbConfig.js");

module.exports = {
  getDishes: () => {
    return db("dishes");
  },

  getDish: id => {
    return db("dishes")
      .where({ id })
      .first();
  }
};
