const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports = {
  name: 'Commands',
  description: 'Sends you the commands',
  execute(message, args){

if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {

               const exampleEmbed = new Discord.MessageEmbed()
               .setTitle("Commands")
               .addField('~commands', 'Sends this commands embed')
               .addField('~cat', 'Sends a random cat photo')
               .addField('~dog', 'Sends a random dog photo')
               .addField('~meme', 'Sends a random meme')
               .addField('~FoodMeme', 'Sends a random food meme')
               .addField('Update Logs', '[View](https://hackmd.io/@rhaun175/r1qXy-QOF)')
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
