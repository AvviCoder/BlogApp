//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{ // comment is done on which post
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: { // who is the one commented on the psot
        type: String,
        required:true,
    },
    body: { // what is written in the comment
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);