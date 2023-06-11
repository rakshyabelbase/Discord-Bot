const Discord = require("discord.js");//discord.js node modules

//contains a string that is the password for the discord bot
const {config} = require("./config.json");



const Client = new Discord.Client({
    intents:[
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,

    ],
    partials:[
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.GuildMessages,
        Discord.Partials.User
    ]
});
//Ready event captures the state when bot gets online
Client.on("ready",(client)=>{
    console.log("This bot is online"+ client.user.tag)
});


//messageCreate event captures data of a message that is created/pushed.
Client.on("messageCreate",(message)=>{


    // if the user who wrote message is a Discord bot,
    //then return out of code execution.
    if (message.author.bot == true){
        return
    }
    // convert the user message to lowercase letters.
    const messageLowerCase = message.content.toLowerCase();


    if(messageLowerCase == "!help"){
        message.reply("This bot has 2 commands: !help !hello");
    }
    else if(messageLowerCase == "!hello"){
        message.reply("Hello on you too");
    }
   // message.reply("You have written a message");
});


//logs the client in, establishing a websocket connection to Discord
Client.login(config)