const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Hello, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""} ${ctx.message.from.last_name ? ctx.message.from.last_name : ""}!`));

bot.on('message', (ctx) => ctx.telegram.copyMessage(ctx.message.chat.id, ctx.message.chat.id, ctx.message.message_id));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));