const express = require("express");
const port = process.env.PORT || 8080;
const cors = require("cors");

const router = require("./router");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
    res.json("Hellow World");
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})