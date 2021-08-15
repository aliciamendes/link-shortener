import axios from "axios";

//key bitly: 0f1198025d3b0a688dcc1165d62293192d64dd07
//base url: https://api-ssl.bitly.com/v4/

export const key = "0f1198025d3b0a688dcc1165d62293192d64dd07";
const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
});

export default api;
