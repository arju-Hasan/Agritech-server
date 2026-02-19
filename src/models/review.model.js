const mongoose=require("mongoose");

const reviewSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },      
    comment:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Review",reviewSchema);