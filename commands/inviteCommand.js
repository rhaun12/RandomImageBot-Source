const Discord = require('discord.js');
const talkedRecently = new Set();    

module.exports = {
  name: 'inviteCommand',
  description: 'Invite me!',
  execute(message, args){

	// First, this must be at the top level of your code, **NOT** in any event!
    
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {

           // the user can type the command ... your command code goes here :)

    const exampleEmbed = new Discord.MessageEmbed()
  .setTitle("<:RandomImageBot:861286667016863794> Invite me! <:RandomImageBot:861286667016863794>")
//  .addField('Random Image Bot Website', 'https://randomimagebot.wordpress.com/')
  .addField('Invite Link', 'https://discord.com/oauth2/authorize?client_id=861042274627223622&scope=bot&permissions=2214980673')
  .setTimestamp()
  .setFooter(message.author.username);

    message.channel.send(exampleEmbed);

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
  }
}
