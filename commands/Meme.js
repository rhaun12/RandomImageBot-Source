const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports = {
  name: 'Meme',
  description: 'Sends you a random meme',
  execute(message, args){



      var answers = [
         "https://img.delicious.com.au/Nr24Y0aQ/del/2016/06/it-disagrees-with-me-31377-2.jpg",
         "https://img.delicious.com.au/_brkKvcU/del/2016/06/but-im-hungry-now-31370-2.jpg",
         "https://img.delicious.com.au/kFRGtVJ8/del/2016/06/every-kid-can-relate-31368-2.jpg",
         "https://img.delicious.com.au/UrlNmlzH/del/2016/06/everytime-31367-2.jpg",
         "https://img.delicious.com.au/IleuoxGV/del/2016/06/hop-to-it-31362-2.jpg",
         "https://img.delicious.com.au/qfIYdLC4/del/2016/06/makeitdelicious-31357-2.jpg",
         "https://img.delicious.com.au/jEWdBsYn/del/2016/06/living-on-the-edge-31356-2.jpg",
         "https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg",
         "https://video-images.vice.com/articles/5dfcdf5174a820009a1b4a41/lede/1576853802436-chicky-nuggies.jpeg?crop=1xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*",
         "https://3c534w2w7sa3ma8ved14ax12-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png",
         "https://thecyphersagency.com/wp-content/uploads/2017/05/leo2.png",
         "http://fosi-assets.s3.amazonaws.com/media/original_images/funny-game-of-thrones-memes-coverimage.jpg",
	 "https://static.toiimg.com/thumb/msid-78679348,width-800,height-600,resizemode-75,imgsize-111635,pt-32,y_pad-40/78679348.jpg",
	 "https://imgk.timesnownews.com/story/wfh_meme.jpg?tr=w-600,h-450,fo-auto",
	 "https://www.care.com/c/wp-content/uploads/sites/2/2021/04/nicolef455-202117012317648905-1080x1080.png",
	 "https://cdn.kinsights.com/content/images/nicolef455-202120041820212538.png",
	 "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/06/tough-guy-entrance-meme.jpg?resize=500%2C583&ssl=1",
	 "https://cdn.kinsights.com/content/images/nicolef455-202120041820066161.png",
	 "https://cdn.kinsights.com/content/images/nicolef455-202120041820598344.png",
	      "https://cdn.memes.com/up/5236991581735107/i/1625175747669.jpg",
	      "https://cdn.memes.com/up/12235091584885546/i/1625148048000.jpg",
	      "https://cdn.memes.com/up/71558571535638926/i/1625161464955.jpg",
	      "https://cdn.memes.com/up/5236991581735107/i/1625258665281.jpg",
	      "https://cdn.memes.com/up/72431541622087695/i/1625265849836.jpg",
	      "https://i.redd.it/p1zo40p3m6971.jpg",
	      "https://cdn.memes.com/up/67686711591493189/i/1625180929566.jpg",
	      "https://cdn.memes.com/up/18641351578798577/i/1625157607314.jpg",
	      "https://cdn.memes.com/up/62634411580857374/i/1625158171292.jpg",
	      "https://cdn.memes.com/up/68570021584129472/i/1625172421064.jpg",
	      "https://cdn.memes.com/up/5236991581735107/i/1625258600962.jpg",
	      "https://cdn.memes.com/up/97796481603232883/i/1625275759980.jpg",
	      "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.53.38%20AM.png",
	      "https://everythingfunny.org/wp-content/uploads/2020/05/funnyhousewifememe.jpg?v=1590067415",
	      "https://everythingfunny.org/wp-content/uploads/2020/03/babyyodameme1.jpg",
	      "https://everythingfunny.org/wp-content/uploads/2020/03/dad-jokememe2.png",
	      "https://everythingfunny.org/wp-content/uploads/2019/09/now1.jpg",
        "https://img.memecdn.com/too-lazy-to-cook_c_3377699733000158.webp",
        "https://img.memecdn.com/it-happens_c_3377699733000145.webp",
        "https://img.memecdn.com/please-keep-the-earth-clean-its-not-uranus_c_3377699733000143.webp",
        "https://img.memecdn.com/it-never-changes_c_3377699733000146.webp",
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-lm1toysfy4.jpg",
        "https://axiomq.com/wp-content/uploads/2020/02/meme-1024x576.jpg",
        "https://ultimastatus.com/wp-content/uploads/2021/06/ripoffs-of-other-most-popular-memes.jpg",
        "https://everythingfunny.org/wp-content/uploads/2020/05/funnyhousewifememe.jpg",
        "https://geeksoncoffee.com/wp-content/uploads/2019/08/funny-most-popular-memes.jpg",
        "https://cdn.guff.com/site_0/media/32000/31846/items/99ed5114f66c36899fe7b0ce.jpg",
        "https://www.jokesforfunny.com/wp-content/uploads/2020/09/soulja-boy-drake-meme.jpg"

          ]



var randomAnswer = answers[Math.floor(Math.random() * answers.length)];


    if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Command Cooldown. ** Please wait 15 seconds before using this command again, <@" + message.author + ">");
    } else {

           // the user can type the command ... your command code goes here :)

           const exampleEmbed = new Discord.MessageEmbed()
          	.setTitle('Random Meme')
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
