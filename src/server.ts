import { Telegraf } from "telegraf";
const BOT_TOKEN = "7619524092:AAHmK-cWr1M5gv5wbrfOHwGV4udb5rFWntE";

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  ctx.reply(
    `Hey ready dear ${ctx.message.from.first_name} to see amazing and unblieaveable magic?`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Yes i'am very excited 😊 ", callback_data: "yes" },
            { text: "No way 😑", callback_data: "no" },
          ],
        ],
      },
    }
  );

  bot.action("yes", async (ctx) => {
    ctx.answerCbQuery();
    await ctx.reply("Okay, tell me your name");

    bot.on("text", async (ctx) => {
      const loadingResult = await ctx.reply(
        "Please wait... generating the magic 💫"
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
      ctx.deleteMessage(loadingResult.message_id);
      await ctx.reply("I got it 😊, your name is" + " " + ctx.message.text);
    });
  });

  bot.action("no", (ctx) => {
    ctx.answerCbQuery();
    ctx.reply("Okay good bye");
  });
});

bot.launch(() => {
  console.log("Bot is running successfully...");
});
