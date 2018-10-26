const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });


client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!glitch') {
      // Send "pong" to the same channel
      message.channel.send('Le glitch xbox gold a été patch');
    }
  });

client.on('message', message => {
    if(message.content == 'Serveur') {
    const serverLevel = ["None", "Low", "Medium", "High", "Max"];

    const embed = new Discord.MessageEmbed()
    .setAuthor(m.guild.name, m.guild.iconUrl())
    .setThumbnail(m.guild.iconUrl())
    .addField('Chef', m.guild.owner.user.tag, true)
    .addFieled('ID', m.guild.id, true)
    .addField('Nombre de membres', m.guild.memberCount, true)
    .addFiled('Personnes en ligne', m.guild.members.filter(mem => mem.presence.status !='Offline').size)
    .addFiled('Date de création', moment.utc(m.guild.createdAt).format("dddd, MMMM Do, YYYY"), true)

    return m.channel.send(embed)
    }
});

client.login('NTAzMzA4NzM3MjY4Njc4NjU3.DrSgyA.V06dJjnjyXOrLR8KnKZOCgYwv50')
