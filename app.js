const express = require('express')
require("dotenv").config();
const cors = require("cors");
const router = require('./routes/weatherRoutes');
// const { centralErrorHandler } = require('./controllers/errorController');
const app = express()

const mongoose = require('mongoose')

const PORT = process.env.PORT
const DB = process.env.MONGO_URL
const apiKey = process.env.API_KEY 
// const HOST = process.env.HOST

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes middleware



// server listen


mongoose.connect(DB).then(data=>{
    console.log('DB Connected !!')
    app.listen(PORT,()=>{
        console.log(`Server running at http://localhost:${PORT}`)
    })
}).catch(err=>console.log(err))

app.use("/api/weather", router);


// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).send("<h1> 404! Page not found on the server</h1>");
});

// // central error handler middleware
// app.use(centralErrorHandler);


module.exports = app;