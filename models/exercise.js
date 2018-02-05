var orm = require("../config/orm.js");

var exercise = {
  all: function (cb) {
    orm.all("exercises", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("exercises", [
      "exercise_name", "completed"
    ], [
        name, false
      ], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("exercises", {
      completed: true
    }, condition, cb);
  }
};

module.exports = exercise;
