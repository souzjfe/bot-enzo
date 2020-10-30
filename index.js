const Discord = require('discord.js');
const client = new Discord.Client();
const xingamentos = require('./src/falas.js');
const reacoes = require('./src/falas.js');
const desmotivacional = require('./src/falas.js');
const token = ''
client.login(token);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.content == "=x") {
        (await message.channel.send(xingamentos[Math.floor((xingamentos.length) * Math.random())].msgtts, {
            tts: true
        }));
        console.log(xingamentos)
    } else if (message.content == "=r") {
        (await message.channel.send(reacoes[Math.floor((reacoes.length) * Math.random())].msgtts, {
            tts: true
        }));
        console.log(reacoes)
    } else if (message.content == "=d") {
        (await message.channel.send(desmotivacional[Math.floor((desmotivacional.length) * Math.random())].msgtts, {
            tts: true
        }));
        console.log(desmotivacional)
    }
});