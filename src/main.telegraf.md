import { Markup, Telegraf } from "telegraf";
const BOT_TOKEN = "7619524092:AAHmK-cWr1M5gv5wbrfOHwGV4udb5rFWntE";

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hey, How are you doing" + " " + ctx.message.from.first_name);
});

bot.command("help", (ctx) => {
  ctx.reply(`Hey ${ctx.message.from.first_name}, What can i help you please?`);
});

bot.hears("hello", (ctx) => {
  ctx.reply("Hello there! How can I assist you today?");
  ctx.reply("Hello there! How can I assist you today?");
});

bot.on("sticker", async (ctx) => {
  await ctx.deleteMessage(ctx.msgId);
  ctx.reply(
    "Sticker not allowed to this bot please don't try again otherwise we will ban you!"
  );
});

bot.command("payments", (ctx) => {
  ctx.reply(
    "Choose payment method",
    Markup.inlineKeyboard([
      Markup.button.callback("Telebirr", "telebirr"),
      Markup.button.callback("Awash bank", "awash"),
      Markup.button.callback("CBE", "cbe"),
      Markup.button.callback("Abyssinia bank", "abyssinia"),
    ])
  );
});

bot.telegram.sendMessage;
// Handle button clicks
bot.action("telebirr", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("You selected Telebirr!");
});

// Handle any other text with bot.on
bot.on("text", (ctx) => {
  ctx.reply(`You said: "${ctx.message.text}". I'm here to chat!`);
});

bot.launch(() => {
  console.log("Bot is running successfully...");
});
