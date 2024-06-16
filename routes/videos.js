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

router.route('/:id')
      .get((req,res)=>{
        let data=JSON.parse(fs.readFileSync("./data/videos.json"));
        const oneObj=data.find(obj=>obj.id===req.params.id);
        res.json(oneObj)
      })

export default router;