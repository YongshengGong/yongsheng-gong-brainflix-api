import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/videos.js";
const app = express();
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());
const api_key = process.env.api_key || "3e1b084f-72fa-4a65-8938-76c9f8b3a923";
app.use((req, res, next) => {
    if (req.query.api_key != api_key || !req.query.api_key) {
        res.status(401).json({ message: "unauthorized: api key is missing or invalid" });
        return;
    }
    else {
        // res.status(200).json({message:"api key is valid"});
        next();
    }
})
app.use("/videos", router);
app.listen(8080, () => {
    console.log("server is now running on port 8080");
})