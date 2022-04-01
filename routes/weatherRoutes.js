const express = require("express")
const { showWeatherData, getWeatherDetails } = require("../controllers/weatherController")

const router = express.Router()

router.get('/',showWeatherData)
router.post("/city",getWeatherDetails)

module.exports = router