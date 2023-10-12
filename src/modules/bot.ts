import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

console.log("Token: ", process.env.API_KEY_BOT);
export const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: true,
});
