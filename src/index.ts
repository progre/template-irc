/// <reference path="../typings/tsd.d.ts"/>
var irc = require('irc');

var bot = new irc.Client('SERVER', 'NAME', {
    debug: true,
    channels: ['CHANNEL'],
});
bot.on('error', (message: any) => {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});
bot.on('message#CHANNEL', (from: any, message: string) => {
    console.log('<%s> %s', from, message);
});
bot.on('message', (from: any, to: any, message: any) => {
    console.log('%s => %s: %s', from, to, message);
    if (to.match(/^[#&]/)) {
        // channel message
        if (message.match(/hello/i)) {
            //bot.say(to, 'Hello there ' + from);
        }
        if (message.match(/dance/)) {
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D\\-<\u0001") }, 1000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D|-<\u0001") }, 2000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D/-<\u0001") }, 3000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D|-<\u0001") }, 4000);
        }
    }
    else {
        // private message
    }
});
