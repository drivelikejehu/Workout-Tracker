const router = require("express").Router();
const db =  require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workoutDb => {
        res.json(workoutDb);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
      $push: {exercises: req.body},
    }, { new: true })
      .then(workoutDb => {
        res.json(workoutDb);
      }).catch(err => {
        res.json(err);
      });
  });
  
  router.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body)
    .then(workoutDb => {
      res.json(workoutDb);
    }).catch(err => {
      res.json(err);
    });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(7)
    .then(workoutDb => {
      res.json(workoutDb);
    })
    .catch(err => {
      res.json(err);
    });
  });

  module.exports = router;