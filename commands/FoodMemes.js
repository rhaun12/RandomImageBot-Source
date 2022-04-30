const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports = {
  name: 'FoodMemes',
  description: 'Sends you a random food meme',
  execute(message, args){

    if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {


      var answers = [
         "https://img.delicious.com.au/Nr24Y0aQ/del/2016/06/it-disagrees-with-me-31377-2.jpg",
         "https://img.delicious.com.au/_brkKvcU/del/2016/06/but-im-hungry-now-31370-2.jpg",
         "https://img.delicious.com.au/kFRGtVJ8/del/2016/06/every-kid-can-relate-31368-2.jpg",
         "https://img.delicious.com.au/UrlNmlzH/del/2016/06/everytime-31367-2.jpg",
         "https://img.delicious.com.au/IleuoxGV/del/2016/06/hop-to-it-31362-2.jpg",
         "https://img.delicious.com.au/qfIYdLC4/del/2016/06/makeitdelicious-31357-2.jpg",
         "https://img.delicious.com.au/jEWdBsYn/del/2016/06/living-on-the-edge-31356-2.jpg"

          ]



var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

const urlHyperlink = "Image Source: "+randomAnswer

const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Random Food Meme')
	.setImage(randomAnswer)
  .setFooter(urlHyperlink);


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
