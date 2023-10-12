import { bot } from "./modules/bot";

bot.on("text", async (msg) => {
  console.log(msg);
});
