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

  {
    command: "menu",
    description: "Меню",
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
    } else if (msg.text == "/menu") {
      await bot.sendMessage(msg.chat.id, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ["⭐️ Картинка", "⭐️ Видео"],
            ["⭐️ Аудио", "⭐️ Голосовое сообщение"],
            ["⭐️ Контакт", "⭐️ Геолокация"],
            ["❌ Закрыть меню"],
          ],
          resize_keyboard: true,
        },
      });
    } else if (msg.text == "❌ Закрыть меню") {
      await bot.sendMessage(msg.chat.id, "Меню закрыто", {
        reply_markup: {
          remove_keyboard: true,
        },
      });
    } else {
      await bot.sendMessage(msg.chat.id, msg.text);
    }
  } catch (error) {
    console.log(error);
  }
});
