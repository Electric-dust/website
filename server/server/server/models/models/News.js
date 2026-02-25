const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    title:String,
    image:String,
    description:String,
    category:String,
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true})

module.exports = mongoose.model("News",newsSchema)
