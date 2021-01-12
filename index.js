const { Telegraf } = require('telegraf')
const config = require('./config');

const bot = new Telegraf(config.token);

bot.command('example',ctx => {
    ctx.reply('Este es un ejemplo :)');
});

bot.command('hello', ctx => {
    console.log(ctx.from);
    ctx.reply(`Hola ${ctx.from.username}`);
});

bot.launch();