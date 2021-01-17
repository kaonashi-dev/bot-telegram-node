const { Telegraf } = require('telegraf');
const config = require('../config');
const path = require('path');

const bot = new Telegraf(config.token);

bot.start(ctx => {
    ctx.reply(`Hola @${ctx.from.username} bienvenido :)`);
});

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
});

bot.on('sticker', ctx => ctx.reply('Enviaste un sticker...'));

bot.on('photo', (ctx) => {
    ctx.reply('Eviaste una foto :)');
});

bot.command('example', ctx => {
    ctx.reply('Este es un ejemplo :)');
});

bot.command('error', ctx => {
    console.log(ctxx.from);
    ctx.reply(`Hola @${ctx.from.username}`);
});

bot.command('/img', ctx => {
  ctx.replyWithPhoto({source: path.join(__dirname, '/files/img/archlinux.png')});
});



bot.catch((err, ctx) => {
    console.log(`ERROR: ${ctx.updateType}`, err);
    ctx.reply('Ocurrio error, por favor verifica tu comando');
});

bot.launch();