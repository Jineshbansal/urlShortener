const express=require("express");
const urlRoute= require('./routes/url');
const {connectToMongodb}=require("./connect");
const { connect } = require("mongoose");
const {URL}=require("./models/url")
const app=express();
const PORT=8001;
connectToMongodb('mongodb://localhost:27017/short-url').then(()=>{console.log("mongodb connected")});

app.use(express.json());
app.use("/url",urlRoute);
app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
    const entry =await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
        visitHistory:{timestamp:Date.now()},
    }});
    res.redirect(entry.redirect);
})
app.listen(PORT,()=>{console.log(`server start at PORT : ${PORT}`)});