const Discord = require("discord.js"); // discord.js node module.

// contains a string that is the password for the discord bot.
const { config } = require("./config.json");

// Gateway Intents were introduced by Discord so bot developers can choose 
// which events their bot receives based on which data it needs to function.
// With partials we will be able to receive the full data of the objects returned from each event.
// Creating a new client with intents and partials needed for this bot to function.
// partials makes sure that we receive the full data of the object returned from events.
const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.User
    ]
});

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
    console.log("This bot is now online: " + client.user.tag);
});

// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
    // if the user who wrote the message is a Discord bot, 
    // Then return out of code execution.
    if (message.author.bot == true){
        return;
    }

    // Convert the user's message to lowercase letters.
    const messageLowerCase = message.content.toLowerCase();

    console.log(message.author.tag);
    console.log(message.author.username);
    console.log(message.author.discriminator);
    console.log(message.author.createdAt);

    //console.log(message.guild.name);
    //console.log(message.guild.createdAt);

    //console.log(message.guild.memberCount);
    //console.log(message.guild.members.fetch().then(console.log).catch(console.error));
});

// user joins your discord server event
Client.on("guildMemberAdd", (member) => {
    console.log(member.user.tag);
    console.log("New user: " + member);
});

// Logs the client in, establishing a WebSocket connection to Discord.
Client.login(config);