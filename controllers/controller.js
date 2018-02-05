var express = require("express");

var router = express.Router();
var exercise = require("../models/exercise.js");


router.get("/", function(req, res) {
  res.redirect("/exercises");
});

router.get("/exercises", function(req, res) {

  exercise.all(function(exerciseData) {
 
    res.render("index", { exercise_data: exerciseData });
  });
});

router.post("/exercises/create", function(req, res) {
  
  exercise.create(req.body.exercise_name, function(result) {

    console.log(result);
    res.redirect("/");
  });
});

router.put("/exercises/:id", function(req, res) {
  exercise.update(req.params.id, function(result) {
   
    console.log(result);
  
    res.sendStatus(200);
  });
});

module.exports = router;
