import express from "express";
import fetchRouter from "./routes/fetchRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ "Access-Control-Allow-Origin": "*" }));

app.use("/api/v1", (req, res) => {
  res.json({ greet: "hello" });
});
app.use("/api/vi/tickers", fetchRouter);

app.all("*", (req, res) => {
  res.status(400).send("Oops page not found.");
});
export default app;
