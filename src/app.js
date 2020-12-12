import express from "express";
import path from "path";

const PORT = 7000;

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.listen(PORT, (req, res) => {
    console.log("SEVER START");
});