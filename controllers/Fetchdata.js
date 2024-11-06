import axios from "axios";

async function Fetchdata() {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data).slice(0, 10);

    return tickers.map(({ name, last, buy, sell, volume, base_unit }) => ({
      name,
      last,
      buy,
      sell,
      volume,
      base_unit,
    }));
  } catch (error) {
    console.log(`Error fetching data: ${error.message}`);
  }
}
export default Fetchdata
