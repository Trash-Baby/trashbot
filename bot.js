console.log('READY....');
require("dotenv").config()

const Discord = require('discord.js');
const { Client, IntentsBitField } = require('discord.js');

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildWebhooks, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent);

const client = new Client({ intents: myIntents });

client.on('ready', readyDiscord);

function readyDiscord(){
	console.log('LETS GO');
}

client.on('messageCreate', (message) => {
	if (message.content == "hi"){
		message.reply("HOWDY")
	}
});

client.login(process.env.TOKEN);