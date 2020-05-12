import express from "express";
import router from "./app/router";

const app = express();
app.use(router);

app.listen(3000, () => console.log("API running..."));
