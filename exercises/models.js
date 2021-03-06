const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const ExerciseSchema = new Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  status: {
    type: String,
    default:'public'
  },
  videos: [{
    title: String,
    videoID: String,
    url: String
  }],
  // ratings: [{
  //   date:{
  //     type: Date,
  //     default: Date.now
  //   },
  //   user:{
  //     type: Schema.Types.ObjectId,
  //     ref:'User'
  //   },
  //   value: Number
  // }],
  // allowComments: {
  //   type: Boolean,
  //   default:true
  // },
  // comments: [{
  //   body: {
  //     type: String,
  //     // required: true
  //   },
  //   date:{
  //     type: Date,
  //     default: Date.now
  //   },
  //   user:{
  //     type: Schema.Types.ObjectId,
  //     ref:'User'
  //   }
  // }],
  user:{
    type: Schema.Types.ObjectId,
    ref:'User'
  }
  // date:{
  //   type: Date,
  //   default: Date.now
  // }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = {Exercise};