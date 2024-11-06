import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from .env file

let db;
const connectionToDb = async () => {
  try {
    if (!db) {
      const client = new MongoClient(process.env.MONGO_URI);
      await client.connect();
      db = client.db("quadpass");
      console.log(`Connected to MongoDB`);
    }
    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectionToDb;
