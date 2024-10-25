import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "8c2e9804dfmshc875bb7f07d85f1p10958djsn65334f790735",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export default api;
