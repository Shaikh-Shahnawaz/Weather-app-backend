// Show all users

const weathers = require("../models/weatherModal");

exports.showWeatherData = async (req, res) => {
  weathers;
  try {
    const data = await weathers.find();
    res.json({ message: "Data Fetched !!", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

exports.getWeatherDetails = async (req, res) => {
  
  // console.log(req.body)
  try {
    const data = await weathers.create(req.body);
    res.json({ message: "Data Saved !!", data: data });
  } catch (error) {
    throw new Error(error);
  }
};
