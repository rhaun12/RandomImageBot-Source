const Discord = require('discord.js');
const bot = new Discord.Client();
const client = bot
const PREFIX = "~";
const prefix = PREFIX
const PermissonError = 'Error! You don\'t have permission to run this command';
bot.on('ready', () =>{
  console.log('Bot is online!');
})


bot.on("message", message => {
    if (message.content.toLowerCase() == "shutdown") { // Note that this is an example and anyone can use this command.
        message.channel.send("Shutting down...").then(() => {
            return;
            bot.destroy();
        })
    }
})


const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'test') {
    await interaction.reply('Pong!');
  }
});


client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'cat'){
      client.commands.get('RandomCat').execute(message, args);
  } else if (command == 'Cat'){
      client.commands.get('RandomCat').execute(message, args);
  } else if (command == 'dog'){
      client.commands.get('RandomDog').execute(message, args);
  } else if (command == 'Dog'){
      client.commands.get('RandomDog').execute(message, args);
  } else if (command == 'commands'){
      client.commands.get('Commands').execute(message, args);
  } else if (command == 'Commands'){
      client.commands.get('Commands').execute(message, args);
  } else if (command == 'FoodMeme'){
      client.commands.get('FoodMemes').execute(message, args);
  } else if (command == 'foodmeme'){
      client.commands.get('FoodMemes').execute(message, args);
  } else if (command == 'Foodmeme'){
      client.commands.get('FoodMemes').execute(message, args);
  } else if (command == 'meme'){
      client.commands.get('Meme').execute(message, args);
  } else if (command == 'Meme'){
      client.commands.get('Meme').execute(message, args);
  }  else if (command == 'invite'){
      client.commands.get('inviteCommand').execute(message, args);
  }  else if (command == 'Invite'){
      client.commands.get('inviteCommand').execute(message, args);
  } else if (command == 'help'){
      client.commands.get('Commands').execute(message, args);
  } else if (command == 'Help'){
      client.commands.get('Commands').execute(message, args);
  }
})

const token = '';

require('./server')();
bot.login(token);
