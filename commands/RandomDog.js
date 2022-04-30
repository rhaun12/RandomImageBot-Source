const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports = {
  name: 'RandomDog',
  description: 'Sends you a random dog photo',
  execute(message, args){



      var answers = [
         "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ]



var randomAnswer = answers[Math.floor(Math.random() * answers.length)];


if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {

           // the user can type the command ... your command code goes here :)

           const exampleEmbed = new Discord.MessageEmbed()
          	.setTitle('Random Dog Photo')
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
