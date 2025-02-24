const express = require("express");
const router = express.Router();
const Catering = require("../models/catering.js");

//listing all the catring on cruise
router.get("/", async (req, res) => {
    const caterings = await Catering.find();
    res.render("catering/index.ejs", {caterings});
})

//show catering in details like their service and items they are providing
router.get("/:id", async (req, res) => {
    const catering = await Catering.findById(req.params.id);
    res.render("catering/show.ejs", {catering});
})

module.exports = router;