const router = require("express").Router(); //require express router

//Import Controller
const Controller = require("./controller.js");

//Define POST route for creating timeline snapshot
router.post("/api/snapshots", Controller.createSnapshot);

// Define GET route for getting all timeline snapshots
router.get("/api/snapshots", Controller.getAllSnapshots);

module.exports = router;