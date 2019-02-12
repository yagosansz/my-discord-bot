module.exports = (client, ready) => {
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
};
