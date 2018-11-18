const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ٍSpam Bot By itzZa1D , VM#8866");

client.on("ready", () => {
let channel =     client.channels.get("513831794659950604")
setInterval(function() {
channel.send(`Venom is the Best`);
}, 25)
})
 
client.login(process.env.BOT_TOKEN);
