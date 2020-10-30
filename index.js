const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzcxODAyMTE4NDM2MjkwNTcx.X5xavA.1q1E48C-PKK3FqyCRO1lMv6Ddsw"
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(token);