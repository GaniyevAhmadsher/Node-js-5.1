import express from "express";
import "dotenv/config";
import AllRouters from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/api", ...AllRouters());

const __PORT__ = process.env.PORT || 8080;
const server = app.listen(__PORT__, () => {
  console.log(`server is running - http://localhost:${__PORT__}`);
});
