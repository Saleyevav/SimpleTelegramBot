import { bot } from "./modules/bot";

const commands = [
  {
    command: "start",
    description: "Запуск бота",
  },

  {
    command: "help",
    description: "Раздел помощи",
  },
];

bot.setMyCommands(commands);

bot.on("text", async (msg) => {
  try {
    if (msg.text == "/start") {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);
    } else if (msg.text == "/help") {
      await bot.sendMessage(
        msg.chat.id,
        `Раздел помощи HTML\n\n<b>Жирный Текст</b>\n<i>Текст Курсивом</i>\n<code>Текст с Копированием</code>\n<s>Перечеркнутый текст</s>\n<u>Подчеркнутый текст</u>\n<pre language='c++'>код на c++</pre>\n<a href='t.me'>Гиперссылка</a>`,
        {
          parse_mode: "HTML",
        }
      );
    } else {
      await bot.sendMessage(msg.chat.id, msg.text);
    }
  } catch (error) {
    console.log(error);
  }
});
