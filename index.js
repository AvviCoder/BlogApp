
// express app instatiaition
const express = require("express");
const app = express();

// to get the data into the proccess object
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware as body parser to decode the body of the request
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

// default page route
app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})