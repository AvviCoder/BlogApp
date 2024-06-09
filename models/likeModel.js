//import mongoose
const mongoose = require("mongoose");


//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: { // the one who had liked the post
        type: String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);