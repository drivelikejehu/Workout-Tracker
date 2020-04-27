const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  }, 
  exercises: [
    {
      type: {type: String},
      name: {name: String},
      duration: {duration: Number},
      weight: {weight: Number},
      reps: {reps: Number},
      sets: {sets: Number},
      distance: {distance: Number}
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
