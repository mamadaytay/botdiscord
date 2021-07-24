//imports
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token} = require('./config.json');


//script
client.once('ready', () => {
  const channel = client.channels.cache.get("868125128431656972")
  
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("[+]Successfully Online Bot");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});




client.on('message', message => {
	if (message.content === `سلام`) {
        message.channel.send('Salam Azizam : )');
        client.users.fetch(`866877308231876668`, false).then((user) => {
          user.send(`[LOG] ${message.author.username} Salam Kard Dar Chanel : ${message.guild.name}`);
        });
    } else if (message.content === `darya`) {
        message.channel.send('Khahar Khoshmel Hesam Logesham Barash Raft Farar Kon Ta Nayomade : |');
        client.users.fetch(`866877308231876668`, false).then((user) => {
          user.send(`[LOG] ${message.author.username} Eshgheto Seda zad toy server : ${message.guild.name}`);
        });
    } else if (!message.guild) return;
  
  
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first()
    
      if (user) {
       
        const member = message.guild.member(user);
     
        if (member) {
         
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}, Movafagh Bashid!`); // this is the message that will be.
            client.users.fetch(`866877308231876668`, false).then((user) => {
              user.send(`[LOG] ${user.tag} Az Server ${message.guild.name} Ban Shod`);
            });
          }).catch(err => {
          
            message.reply('Shoma Permsion Ban Nadarid!'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
        
            console.error(err);
          });
        } else {
         
          
        }
      } else {
      
        message.reply('Baray Ban Kardan Kasi Ra Mention Konid!');
      }
    } else if (!message.guild) return;
  
  
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first()
    
      if (user) {
       
        const member = message.guild.member(user);
     
        if (member) {
         
          member.kick({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully Kicked ${user.tag}, Movafagh Bashid!`); // this is the message that will be.
            client.users.fetch(`866877308231876668`, false).then((user) => {
              user.send(`[LOG] ${user.tag} Az Server ${message.guild.name} Kick Shod`);
            });
          }).catch(err => {
          
            message.reply('Shoma Permsion Kick Nadarid!'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
        
            console.error(err);
          });
        } else {
         
          
        }
      } else {
      
        message.reply('Baray kick Kardan Kasi Ra Mention Konid!');
      }
    } else if (message.content === `basebot`) {
      message.channel.send(`Salam Esm Man baseBot Hast Bot Shakhsi Shoma Che Kari Az Man Bar Miad? Baray Didan Panel Help !help Bezanid`);
    }
});
client.on('message', async (message) => {
  if (
    message.content.toLowerCase().startsWith('!clear')
  ) {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("You cant use this command since you're missing `manage_messages` perm");
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }

/* 1. Solution */

      await message.delete().catch(e => { amount++; });

      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`cleared \`${_message.size}\` messages :broom:`).then((sent) => {
          client.users.fetch(`866877308231876668`, false).then((user) => {
            user.send(`[LOG] ${_message.size} Ta Payam Az Server ${message.guild.name} Delete Shod`);
          });
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });



/* The following code is your old code */

    } else {
      message.channel.send('Lotfan Bezan Chand Ta Payam Pak She').then((sent) => {
        setTimeout(function () {
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() === prefix + 'help clear') {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
      newEmbed
        //.setDescription('This command clears messages for example `.clear 5` or `.c 5`.')
        //.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send(newEmbed);
    }
  }
});

client.on('message', help => {
  if (help.content === `!help`) {
    //
    client.users.fetch(`${help.author.id}`, false).then((user) => {
      user.send(`Salam Esm Man BaseBot Hast Bot Shakhsi Shoma`);
      user.send(`Help :`);
      user.send(`--------------------------------------------`);
      user.send(`Creator : Darya/A y t a y`);
      user.send(`Discord : Soon...`);
      user.send(`BaseBot Help Users :`);
      user.send(`--------------------------------------------`);
      user.send(`Admin Commands :`);
      user.send(`[!ban] => Ban Kardan Kasi Az Chanel`);
      user.send(`[!kick] => Kick Kardan Kasi Az Chanel`);
      user.send(`[!clear] => Clear Kardan Chat`);
      user.send(`[!changenick] => Avaz Kardan Esm Khod`);
      user.send(`--------------------------------------------`);
      user.send(`*BaseBot For Eveer*`);
      user.send(`--------------------------------------------`);
      
    });
  }
});


//VIP
function chNickname() {
  const targetguild = client.guilds.cache.get("868125125986357268")
  const me = targetguild.members.cache.get(client.user.id)
  let name = [`B`,`B a`,`B a s`,`B a s e`,`B a s e B`,`B a s e B o`,`B a s e B o t`]
  for (let i = 0; i < name.length; i++)
      me.setNickname(name[i])
}; setInterval(chNickname, 3000)



 
//login bot
client.login(config.token)




