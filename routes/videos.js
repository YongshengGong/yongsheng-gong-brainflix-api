import express from "express";
import fs from "fs";
const app=express();
const router=express.Router();
router.route("/")
      .get((_req,res)=>{
        let data=JSON.parse(fs.readFileSync("./data/videos.json"));
        const partialData=data.map(obj=>{
            const {id,title,channel,image,...rest}=obj;
            return {id,title,channel,image};
        })
         res.json(partialData)
      })

export default router;