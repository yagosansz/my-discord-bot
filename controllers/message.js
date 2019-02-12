// will output 'Pong!', if an user types 'ping'
module.exports = (client, msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
};
