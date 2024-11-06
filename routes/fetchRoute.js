import { Router } from "express";
import connectionToDb from "../config/dbConnection.js";
import Fetchdata from "../controllers/Fetchdata.js";

const fetchRouter = Router();

fetchRouter.route("/").get(async (req, res) => {
  try {
    const tickers = await Fetchdata();
    if (!tickers || tickers.length === 0) {
      return res.status(404).json({ message: "No data found to fetch." });
    }

    const db = await connectionToDb();
    const collection = db.collection("tickers");
    await collection.deleteMany(); // Clear previous data
    await collection.insertMany(tickers); // Insert new data
    // console.log(tickers);
    res
      .status(200)
      .json({ message: "Data fetched and stored successfully", data: tickers });
  } catch (error) {
    console.error(`Error fetching or storing data: ${error.message}`);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default fetchRouter;
