const Discord = require('discord.js');
const talkedRecently = new Set(); 

module.exports = {
  name: 'RandomCat',
  description: 'Sends you a random cat photo',
  execute(message, args){



      var answers = [
         "https://www.washingtonian.com/wp-content/uploads/2020/03/sandie-clarke-C8uGiOanMY4-unsplash-994x663.jpg",
         "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1634838/pexels-photo-1634838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/3054570/pexels-photo-3054570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1787414/pexels-photo-1787414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ]



var randomAnswer = answers[Math.floor(Math.random() * answers.length)];


if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {

           // the user can type the command ... your command code goes here :)

           const exampleEmbed = new Discord.MessageEmbed()
          	.setTitle('Random Cat Photo')
          	.setImage(randomAnswer)
           .setFooter('Image Source: '+randomAnswer);


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
