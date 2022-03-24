
const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
    client.user.setActivity('BOT RP PREFIX . -chiamamirob#2965', { type: "WATCHING"})
})

client.on("messageCreate", (message) => {
    if (message.content == ".market") {
        var market = new Discord.MessageEmbed()
            .setTitle("FURTO AL MINIMARKET")
            .setTitle("RADIO SPARTAN:")
            .setDescription("𝗥𝗔𝗣𝗜𝗡𝗔 𝗔𝗟 𝗠𝗔𝗥𝗞𝗘𝗧 𝗔 𝗧𝗨𝗧𝗧𝗘 𝗟𝗘 𝗨𝗡𝗜𝗧𝗔' 𝗥𝗘𝗖𝗔𝗧𝗘𝗩𝗜 𝗔𝗟𝗟𝗘 𝗖𝗢𝗢𝗥𝗗𝗜𝗡𝗔𝗧𝗘 @everyone")
            
        
        message.channel.send({embeds: [market]})
    }

    if(message.content == ".inizioturno") {
        var inizioturno = new Discord.MessageEmbed()
            .setTitle("INIZIO TURNO LAVORATIVO")
            .setDescription("INIZIO TURNO LAVORATIVO" + message.author.toString())

        message.channel.send({embeds: [inizioturno] })
    }

    if (message.content == ".pacific") {
        var pacific= new Discord.MessageEmbed()
            .setTitle("BANCA NAZIONALE")
            .setTitle("RADIO SPARTAN:")
            .setDescription("𝗥𝗔𝗣𝗜𝗡𝗔 𝗔𝗟𝗟𝗔 𝗕𝗔𝗡𝗖𝗔 𝗡𝗔𝗭𝗜𝗢𝗡𝗔𝗟𝗘 𝗔 𝗧𝗨𝗧𝗧𝗘 𝗟𝗘 𝗨𝗡𝗜𝗧𝗔' 𝗥𝗘𝗖𝗔𝗧𝗘𝗩𝗜 𝗔𝗟𝗟𝗘 𝗖𝗢𝗢𝗥𝗗𝗜𝗡𝗔𝗧𝗘 @everyone")
            
        
        message.channel.send({embeds: [pacific]})
    }

    
})