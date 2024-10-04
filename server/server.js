// import express from "express";
const express = require('express');
import daysCtrl from "./src/days.ctrl.js"
import connectMongoDb from "./config/db.js";

const cors = require("cors");

const app = express()
// SERVER LISTEN
const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}....`);
});
// CORS app.use(
app.use(
    cors({
        origin: ["http://localhost:3000", "http://192.168.0.12:3000", "https://job-counter.onrender.com"],
        // origin: "*",
    })
);
connectMongoDb();
// Middleware
app.use(express.json());

// Routes=======================
// ================================================
// FILL DATABASE WITH DAYS
// app.post("/days/fill", daysCtrl.fillDays);
// SERVICE ROUTE
// ====================================================
//Get current day GET 
// showing all days
// private acces
// app.get('/days', daysCtrl.showAllDays);

// Submith day POST from Front end 
// private acces
app.post('/jobs', daysCtrl.submitJob);
// Submith day POST from Front end 
// private acces
// app.delete('/days/:id', daysCtrl.deleteDay);

//Get current day GET 
// showing current day on the home page
// private acces
app.get('/jobs/today', daysCtrl.showToday);

// Submith job POST from Front end 
// private acces
// app.put('/days/edit/jobs', daysCtrl.submitJob);




