function randomInteger(min, max) {    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Hello, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""} ${ctx.message.from.last_name ? ctx.message.from.last_name : ""}!`));

bot.on('message', (ctx) => {
    if(ctx.message.text) {
        ctx.reply(ctx.message.text)
    } else if(ctx.message.dice) {
        if(ctx.message.dice.emoji == "🎰"){
            app.telegram.sendDice(ctx.message.chat.id, "🎰");
        }
        // ctx.reply(ctx.message.dice)
    }
    
})
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));