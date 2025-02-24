require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//forming a connection whit mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//useing middleware
app.set("view engine", "ejs");
app.set(express.static("public"));
app.set(bodyParser.urlencoded({extended: true}));

//importing routes
const cateringRoutes = require("./routes/catering.js");
app.use("/catering", cateringRoutes);

//home route
app.get("/", (req, res) => {
    res.render("index.ejs");
})

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})