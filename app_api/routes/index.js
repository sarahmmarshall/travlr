const express = require("express"); //express app
const router = express.Router(); //router logic

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method Adds a trip

// GET method routes tripsFindByCode - requires paramater
// PUT method routes tripsUpdateTrip - requires paramater
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;