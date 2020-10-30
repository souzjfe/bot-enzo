const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzcxODAyMTE4NDM2MjkwNTcx.X5xavA.BiwN5zvKJV5UAonYpwYTBlCrfUk'
client.login(token);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




// client.on('message', msg => {
//     if (msg.content === 'ping') {
//         msg.reply('Pong!');
//     }
// });