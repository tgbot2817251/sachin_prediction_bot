const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('7718357332:AAFG5WgTpqzFEgWRAndpJ1goStL1pNZJDac'); // 🔹 Apna BOT Token Yaha Dalein

// 🔹 Aapke Telegram Channels (Apne Replace Karein)
const channel1 = '@official_team_19';
const channel2 = '@team19_4u';
const channel3 = '@team19sachin';

// 🔹 Start command – Image + Message + Buttons
bot.start(async (ctx) => {
    const chatId = ctx.chat.id;

    await ctx.replyWithPhoto(
        'https://t.me/Only_4_photos/4', // 🔹 Yaha Apna Image URL Dalein
        {
            caption: "👋 ᴡᴇʟᴄᴏᴍᴇ! ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟ ᴀɴᴅ ᴄʟɪᴄᴋ ᴠᴇʀɪꜰʏ.",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟭", url: `https://t.me/${channel1.replace('@', '')}` }],
                    [{ text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟮", url: `https://t.me/${channel2.replace('@', '')}` }],
                    [{ text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟯", url: `https://t.me/${channel3.replace('@', '')}` }],
                    [{ text: "✅ 𝗩𝗘𝗥𝗜𝗙𝗬", callback_data: "verify" }]
                ]
            }
        }
    );
});

// 🔹 Verification Button ka Code
bot.action('verify', async (ctx) => {
    const userId = ctx.from.id;

    try {
        // ✅ Check if User is in Channel 1
        const res1 = await ctx.telegram.getChatMember(channel1, userId);
        const isMember1 = ['member', 'administrator', 'creator'].includes(res1.status);

        // ✅ Check if User is in Channel 2
        const res2 = await ctx.telegram.getChatMember(channel2, userId);
        const isMember2 = ['member', 'administrator', 'creator'].includes(res2.status);

        // ✅ Check if User is in Channel 3
        const res3 = await ctx.telegram.getChatMember(channel3, userId);
        const isMember3 = ['member', 'administrator', 'creator'].includes(res3.status);

        if (isMember1 && isMember2 && isMember3) {
            // ✅ Agar user tino channels me hai, verify success message bhejo
            await ctx.replyWithPhoto(
                'https://t.me/Only_4_photos/7', // 🔹 Yaha Apna Image URL Dalein
                {
                    caption: `🎉 *ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ, ${ctx.from.first_name}!* 🎉\n\n` +
                             `✅ ʏᴏᴜ ʜᴀᴠᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴠᴇʀɪꜰɪᴇᴅ!\n` +
                             `🚀 ɴᴏᴡ, ᴄʜᴏᴏꜱᴇ ʏᴏᴜʀ ꜰᴀᴠᴏᴜʀɪᴛᴇ ɢᴀᴍᴇ ʜᴀᴄᴋ ʙᴇʟᴏᴡ ᴀɴᴅ ꜱᴛᴀʀᴛ ᴡɪɴɴɪɴɢ! 🎮🔥`,
                             parse_mode: "Markdown", 
                             reply_markup: {
                                 inline_keyboard: [
                                     [
                                         { text: "51GAME", web_app: { url: "https://predictiontoolbot.github.io/51game/" } },
                                         { text: "BDG WIN", web_app: { url: "https://predictiontoolbot.github.io/BdgWin/" } }
                                     ],
                                     [
                                         { text: "101 GAME", web_app: { url: "https://predictiontoolbot.github.io/101game/" } },
                                         { text: "RAJA GAME", web_app: { url: "https://predictiontoolbot.github.io/RajaGame/" } }
                                     ],
                                     [
                                         { text: "55 CLUB", web_app: { url: "https://predictiontoolbot.github.io/55club/" } },
                                         { text: "82 LOTTERY", web_app: { url: "https://predictiontoolbot.github.io/82lottery/" } }
                                     ],
                                     [
                                         { text: "DAMAN", web_app: { url: "https://predictiontoolbot.github.io/DamanGame/" } },
                                         { text: "IN999", web_app: { url: "https://predictiontoolbot.github.io/In999/" } }
                                     ],
                                     [
                                         { text: "DIU WIN", web_app: { url: "https://predictiontoolbot.github.io/DiuWin/" } },
                                         { text: "AVIATOR GOD", web_app: { url: "https://predictiontoolbot.github.io/AviatorGod/" } }
                                     ],
                                     [
                                         { text: "TIRANGA", web_app: { url: "https://predictiontoolbot.github.io/Tiranga/" } },
                                         { text: "BHARAT CLUB", web_app: { url: "https://predictiontoolbot.github.io/BharatClub/" } }
                                     ],
                                     [
                                         { text: "91 CLUB", web_app: { url: "https://predictiontoolbot.github.io/91club/" } },
                                         { text: "TC LOTTERY", web_app: { url: "https://predictiontoolbot.github.io/TcLottery/" } }
                                     ],
                                     [
                                         { text: "BIG DADDY", web_app: { url: "https://predictiontoolbot.github.io/BigDaddy/" } },
                                         { text: "OK WIN", web_app: { url: "https://predictiontoolbot.github.io/OkWin/" } }
                                     ],
                                     [
                                         { text: "RAJA LUCK", web_app: { url: "https://predictiontoolbot.github.io/RajaLuck/" } },
                                         { text: "SIKKIM", web_app: { url: "https://predictiontoolbot.github.io/Sikkim/" } }
                                     ],
                                     [
                                         { text: "GOA GAME", web_app: { url: "https://predictiontoolbot.github.io/GoaGame/" } },
                                         { text: "DM WIN", web_app: { url: "https://predictiontoolbot.github.io/DmWin/" } }
                                     ],
                                     [
                                         { text: "BIG MUMBAI", web_app: { url: "https://predictiontoolbot.github.io/BigMumbai/" } },
                                         { text: "BBGO", web_app: { url: "https://predictiontoolbot.github.io/Bbgo/" } }
                                     ],
                                     [
                                         { text: "DG CLUB", web_app: { url: "https://predictiontoolbot.github.io/DgClub/" } },
                                         { text: "BILI WIN", web_app: { url: "https://predictiontoolbot.github.io/BiliWin/" } }
                                     ],
                                     [
                                         { text: "JAI WIN", web_app: { url: "https://predictiontoolbot.github.io/JaiWin/" } },
                                         { text: "BOUNTY GAME", web_app: { url: "https://predictiontoolbot.github.io/BountyGame/" } }
                                     ],
                                     [
                                         { text: "KWG GAME", web_app: { url: "https://predictiontoolbot.github.io/KWgGame/" } },
                                         { text: "NN GAME", web_app: { url: "https://predictiontoolbot.github.io/NnGame/" } }
                                     ],
                                     [
                                         { text: "LOTTERY 7", web_app: { url: "https://predictiontoolbot.github.io/Lottery7/" } },
                                         { text: "BS WIN", web_app: { url: "https://predictiontoolbot.github.io/BsWin/" } }
                                     ]
                                 ]
                             }
                         }
                     );
                     
            
            
        } else {
            // ❌ Agar user tino channels me nahi hai, warning do
            await ctx.reply("⚠️ ʏᴏᴜ ᴍᴜꜱᴛ ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ");
        }
    } catch (error) {
        console.error("Verification Error:", error);
        await ctx.reply("⚠️ Error checking your membership. Please try again later.");
    }
});

// 🔹 Bot Ko Start Karna
bot.launch();
console.log("🤖 Bot is running...");