const mongoose = require("mongoose");

const weatherSchema = mongoose.Schema({

  country: {
    type: String,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pressure: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    require: true,
  },
  sunset:{
    type:Number,
    require: true,
  },
  temp: {
    type: Number,
    require: true,
   
  },
  weathermood: {
    type: String,
    require: true,
   
  },
  tempMax:{
    type: Number,
    require: true,
   
  },
  tempMin:{
    type: Number,
    require: true,
   
  },
  clouds:{
    type: Number,
    require: true,
   
  },
  
});

const weathers = mongoose.model('weathers',weatherSchema)

module.exports = weathers;