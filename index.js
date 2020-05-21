const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
client.user.setActivity(`?help`);
});

client.on('message', message => {
	if (message.content === `${prefix}creator`) {
		message.channel.send('My creator is Straycat.');
	} else if (message.content === `${prefix}Duover`) {
		message.channel.send('Duover is the founder of Bricky Studios. He is a professional game developer, and Straycat even works for him!');
	} 
	  else if (message.content === `${prefix}website`) {
		message.channel.send(`Here is my creator's website: https://straycatmusic.net And also if a popup comes please put your email in and subscribe! I do not send spam.`);
	} 	
          else if (message.content === `${prefix}help`) {
		message.channel.send('Commands: ?creator, ?Duover, ?website, ?help, ?startyourday, ?Matthew, ?story.');
	} 
          else if (message.content === `${prefix}startyourday`) {
                message.channel.send('Check out this song to get your day started: https://www.audiotool.com/track/bongu/')
        }
          else if (message.content === `${prefix}invite`) {
               message.channel.send('Here is the link to invite me: https://discord.com/oauth2/authorize?client_id=705098446129856612&scope=bot&permissions=68608')
        }
          else if (message.content === `${prefix}Matthew`) {
               message.channel.send('Matthew, aka awesomematthew, is the creator of MurdR. He is also a game developer for Bricky Studios too! Fun fact: Matthew and Straycat are friends.')
        }
          else if (message.content === `${prefix}story`) {
               message.channel.send('Check out a story I wrote: https://www.booksie.com/617846-life-in-space')
        }
});      
client.login(token);



