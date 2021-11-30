const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Hello, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""} ${ctx.message.from.last_name ? ctx.message.from.last_name : ""}!`))
bot.hears('Hello there', (ctx) => ctx.reply("General Kenoby!"))
bot.on('message', (ctx) => ctx.reply(ctx.message.text))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))