const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1); // use to close the execution of code on unexpected error
    } ) // termination of code on occurance of error..
};

module.exports = connectWithDb;