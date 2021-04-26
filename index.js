import express from "express";

import bodyParser from "body-parser";

import dotenv from "dotenv";

import router from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 2021;

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Our book club API is now available on port ${port}`)
})