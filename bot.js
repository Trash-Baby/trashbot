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

const WelcomeChannelID = "1007405940829589557"

client.on("guildMemberAdd", (member) =>{
	member.guild.channels.cache.get(WelcomeChannelID).send('<@${member.id}> Welcome to the Dumpster Daycare! It is still A BIT under construction.')
})

client.login(process.env.TOKEN);