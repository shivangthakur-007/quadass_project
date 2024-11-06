import { config } from "dotenv";
config();
import app from "./app.js";

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  console.log(`PORT is runnng successfully at: http:localhost://${PORT}`);
});
