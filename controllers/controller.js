var express = require("express");

var router = express.Router();
var exercise = require("../models/exercise.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/exercises");
});

router.get("/exercises", function(req, res) {
  // express callback response by calling exercise.selectAllBurger
  exercise.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/exercises/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  exercise.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/exercises/:id", function(req, res) {
  exercise.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
