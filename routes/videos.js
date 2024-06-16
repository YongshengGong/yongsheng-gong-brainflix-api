import express from "express";
import fs from "fs";
const router = express.Router();
router.route("/")
      .get((_req, res) => {
            try {
                  let data = JSON.parse(fs.readFileSync("./data/videos.json"));
                  const partialData = data.map(obj => {
                        const { id, title, channel, image, ...rest } = obj;
                        return { id, title, channel, image };
                  })
                  res.json(partialData)
            }
            catch (error) {
                  console.log(error)
            }
      })
      .post((req, res) => {
            try {
                  let data = JSON.parse(fs.readFileSync("./data/videos.json"));
                  data.push(req.body)
                  fs.writeFileSync("./data/videos.json", JSON.stringify(data));
                  res.json(req.body);
            }
            catch (error) {
                  console.log(error)
            }
      })

router.route('/:id')
      .get((req, res) => {
            try {
                  let data = JSON.parse(fs.readFileSync("./data/videos.json"));
                  const oneObj = data.find(obj => obj.id === req.params.id);
                  res.json(oneObj)
            }
            catch (error) {
                  console.log(error)
            }
      })

export default router;