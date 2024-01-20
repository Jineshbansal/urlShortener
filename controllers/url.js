const {nanoid}=require("nanoid");
const URL=require("../models/url");

async function handleGenerateNewShortUrl(req,res){
    
    const shortId=nanoid(8);
    await URL.create({
         shortId:shortId,

     });

}