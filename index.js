const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6772516417:AAFt_iJKfDDyFiax9D7T48iClSQ5zpplGJo")
bot.start((ctx) => ctx.reply('Assalomu alaykum xush kelibsiz'))
bot.help((ctx) => ctx.reply('Qanaqa yordam beraolaman'))
bot.on(message('text'), (ctx) =>{
    const input = 2 
    const key = Math.floor(Math.random() * 10)
    if (input == key ) {
        ctx.reply('tabriklayman 🎉')
        
    }
    else{
        ctx.reply('afsus!😔  raqam  qayta urinub kurin albatta chiqadi!!');
    }

   
})
bot.on(message('text') , (ctx)=>{ctx.reply(ctx.message.text)})
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
