const errorHandling = require('../Functions/error');
const doEmbed = require("../Functions/embed");
const noblox = require("noblox.js");
const axios = require("axios")
const Discord = require('discord.js');


module.exports = {
  name: 'bgc',
  description: 'bgc',
  async execute(message, args, client) {
   
    if (args[0]) {
        let hasPublicInventory = true;
        //  //reminder: CHANGE IN JSON FILE
        let raidingGroupInfo = [
          { groupId: 8675204, groupName: '[TDR] The Dark Resistance' },
          { groupId: 7033913, groupName: `Order of The Ninth's Revenge` },
          { groupId: 2981881, groupName: 'Hydra International' },
          { groupId: 10937425, groupName: 'Order of the Valkyrie' },
          { groupId: 5691294, groupName: '[Tнe Iппeя Ciяcle]' },
          { groupId: 8224374, groupName: '[DoJ] Department of Justice .' },
          { groupId: 9723651, groupName: '[TC] The Commandos' },
          { groupId: 7281267, groupName: 'Phalanx' },
          { groupId: 10565618, groupName: 'Venomous' },
          { groupId: 9550235, groupName: '[TRI] The Romanian Insurgency' },
          { groupId: 8339712, groupName: '[TSI] The Steel Insurgence' },
          { groupId: 6544420, groupName: 'Jokers Riot' },
          { groupId: 6281575, groupName: 'French Elite' },
          { groupId: 6540835, groupName: '[RTU] Reapers Of The Underworld' },
          { groupId: 5241070, groupName: 'RIPguests Regime' },
          { groupId: 7371298, groupName: 'The Black Business (old)' },
          { groupId: 12386509, groupName: 'The Black Business (new)' },
          { groupId: 7953105, groupName: 'Aces Empire' },
          { groupId: 14018648, groupName: '[T3V] The 3 Victorius' },
          { groupId: 11117772, groupName: '[PHNX] Phalanx' }
        ];
      const username = args[0];
      let robloxId;
      try {
        robloxId = await noblox.getIdFromUsername(args[0]);
      } catch (error) {
        const userAintReal = doEmbed(
          "Invalid username!",
          "Please provide a valid username!",
          "DARK_RED",
          "Error | Whois"
        );
        message.reply({ embeds: [userAintReal] });
        return;
      }
      let groups =await noblox.getGroups(robloxId).catch(e=>erroredOut = true).catch(e=>erroredOut = true);

      nextCursor = "yes";
      current = 0;
      let badges = [];
      let limit = 20;

      if(!hasPublicInventory){
        maxScore -= 2;
        scoreDeductions.push("User has private inventory, score limit -2")
    } else {
        do{

            let requst = await axios.get(`https://badges.roblox.com/v1/users/${robloxId}/badges?limit=100${nextCursor === "yes" ? "" : "&cursor=" + nextCursor}&sortOrder=Asc`).catch(e=>{hasPublicInventory = false; nextCursor = null;});
            
            nextCursor = requst?.data?.nextPageCursor;
            
            if(hasPublicInventory){
                badges.push(...requst.data.data);
            }
            current++
        }
        while(nextCursor && limit >= current)
    }
    let  avatarURL = await noblox.getPlayerThumbnail(
        [robloxId],
        "720x720",
        "png",
        false,
        "body"
      ); 
      
      
      
      let raidingRankPromises = raidingGroupInfo.map(async (group) => {
        const rankName = await noblox.getRankNameInGroup(group.groupId, robloxId);
        if (rankName && rankName !== "Guest") {
          return `${group.groupName} ${rankName}`;
        }
        return null;
      });
      
      let raidingRanks = await Promise.all(raidingRankPromises);
      raidingRanks = raidingRanks.filter((rank) => rank !== null);


 //reminder: CHANGE IN JSON FILE
    let rankInfo = [
      { groupId: 4802792, groupName: 'Red Army' },
      { groupId: 4901723, groupName: 'Milisiya' },
      { groupId: 4849580, groupName: 'CPSU' },
      { groupId: 4805092, groupName: 'KGB' },
      { groupId: 5737557, groupName: 'CRU' },
      { groupId: 5902649, groupName: '109th' },
      { groupId: 5157127, groupName: 'Monarch' },
      { groupId: 5117666, groupName: 'Biopreparet' },
      { groupId: 6018695, groupName: 'Omon' },
      { groupId: 11934361, groupName: 'MDD' },
      { groupId: 4291835, groupName: 'Phoenix' },
      { groupId: 4805062, groupName: 'Red Guard' },
      { groupId: 4808054, groupName: 'Spetsnaz' },
      { groupId: 16467057, groupName: 'SBT' },
      { groupId: 13300850, groupName: 'AEEC' },
      { groupId: 5855498, groupName: 'TSM' },
      { groupId: 4849688, groupName: 'MOD' },
      { groupId: 5687123, groupName: 'TFOC' },
      { groupId: 4849673, groupName: 'Congress' },
      { groupId: 4800484, groupName: 'The Soviet Union' },
      { groupId: 4948472, groupName: "5th" },
    ];
     // filter so it will not sho guest rank!!
    let rankPromises = rankInfo.map(async (group) => {
      const rankName = await noblox.getRankNameInGroup(group.groupId, robloxId);
      if (rankName && rankName !== "Guest") {
        return `${group.groupName} ${rankName}`;
      }
      return null;
    });
    
    let ranks = await Promise.all(rankPromises);
    ranks = ranks.filter((rank) => rank !== null);
    

    let information = await noblox
      .getPlayerInfo({ userId: robloxId })
      .catch((error) => (isBanned = true))
      let pastUsernames = information.oldNames

   // fetch cards from trelelo boarda
   let responses;
   try {
     responses = await axios.all([
       axios.get(
         `https://api.trello.com/1/boards/XrfoA2za/cards?key=b8d724e47b785616e90c74dbab85a26e&token=ATTA2bf74d2e297cc3f517c9db82a1e74d572074b6ff9883de48a43ef42263b934e244CFD8D5`
       ),
     ]);
   } catch (error) {
     console.error('Failed to fetch Trello cards:', error);
   
     return;
   }
  // filterted with old username and current
   const foundCards = responses[0]?.data?.filter((card) => {
     const name = card.name;
     return name === username || pastUsernames.includes(name);
   });
 
   const hasCards = foundCards?.length > 0;
 
   const blacklistLinks = [];
 
   // include the found cards in the blacklists field
   let blacklists = '';
   if (hasCards) {
     foundCards.forEach((card) => {
       const cardLink = ` **[${card.name}]** ${card.shortUrl}`; 
       blacklistLinks.push(cardLink); // store shit in aaray cuz yes
       blacklists += `${cardLink}\n`;
     });
   } else {
     blacklists = 'None';
   }
   // embed

      let embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setThumbnail(avatarURL[0].imageUrl)
      .setTitle('User Information')
      .setDescription('Displaying information about the user')
      .addField('Discord Information', 'Discord Username:\nDiscord ID:\nDiscord Age:\nServer Join Date (TSU):\nChat Messages:')
      .addField(
        'Roblox Information',
        `Username: ${username}\nRoblox Join Date: ${information.age} days\nFriends: ${information.friendCount}\nPrevious name(s): ${information.oldNames}\nBlacklists: ${blacklists}\n\nAccount link: https://www.roblox.com/users/${robloxId}/profile\nAmount of badges: ${badges.length} badges\n Amount of groups: ${groups.length}\nTSU Ranks: ${ranks.join(' | ')}\nBanned/CBanned:`
      )
      .addField('Associations', `Suspicious Friends: \nSuspicious Followers:\nSuspicious Following:\nSuspicious Groups: ${raidingRanks.join(' | ')}\nAffliated Raider Content:
N/A`)
     
      .addField('Pass/Denied', 'Pass/Denied information goes here');
    
    message.reply({ embeds: [embed] });
    }
  }
};
