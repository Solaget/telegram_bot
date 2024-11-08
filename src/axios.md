import axios from "axios";

const BOT_TOKEN = "7619524092:AAHmK-cWr1M5gv5wbrfOHwGV4udb5rFWntE";
const NGROK_URL = "https://6a11-196-191-61-96.ngrok-free.app/";
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
