import express from "express";
import path from "path";
import {router} from "./src/routers/routers.js"

const app = express();
const __dirname = path.resolve(path.dirname(''));
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => console.log(`Server in http://localhost:${PORT}`));