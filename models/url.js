const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirect:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp: { type : Number }}], 
},
{timestamps:true} 
); 

const URL=mongoose.Model("url",urlSchema);
module.exports={URL};