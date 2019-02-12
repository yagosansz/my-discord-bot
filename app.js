require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // bot status
  client.user.setActivity("YouTube", {type: "WATCHING"});

  // list of servers the bot is connected to
  client.guilds.forEach(guild => {
    console.log(guild.name);
    // print out available channels
    guild.channels.forEach(channel => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    });
  });
  // General Text Channel Id: 541324815055978496
  let generalTextChannel = client.channels.get('541324815055978496');
  generalTextChannel.send("Hello, World!");
});

// will output ping, if an user types 'ping'
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// will detect when a user enters/leaves the channel
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  let generalTextChannel = client.channels.get('541324815055978496');

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    generalTextChannel.send('Welcome, ' + newMember.user + '!');
  } else if (newUserChannel === undefined) {
    generalTextChannel.send('See you later, ' + oldMember.user + '!');
  }
})

// establishes a websocket connection with discord
client.login(process.env.BOT_TOKEN);
