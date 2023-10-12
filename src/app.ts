import { bot } from "./modules/bot";

bot.on("text", async (msg) => {
  await bot.sendMessage(msg.chat.id, msg.text);
});
