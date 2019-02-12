// will detect when an user enters/leaves the channel
module.exports = (client, oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  // General Text Channel Id: 541324815055978496
  let generalTextChannel = client.channels.get('541324815055978496');

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    generalTextChannel.send('Welcome, ' + newMember.user + '!');
  } else if (newUserChannel === undefined) {
    generalTextChannel.send('See you later, ' + oldMember.user + '!');
  }
};
