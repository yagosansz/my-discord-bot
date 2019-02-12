require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// read all the files from the controllers folder
fs.readdir('./controllers', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./controllers/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

// establishes a websocket connection with discord
client.login(process.env.BOT_TOKEN);
