//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗫𝗟𝗜𝗖𝗢𝗡-𝗩𝟰-𝗠𝗗  𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : XLICON-V4-MD
//  * @author : 𝐃𝚫𝚪𝐊 𝚭𝚵𝚪𝚯𝐂𝚯𝚯𝐋
//  * @youtube : https://www.youtube.com/@jayden01
//  * @description : XLICON-V4 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: darkzerocool
//Telegram: t.me/darkzerocool
//GitHub: darkzerocool
//WhatsApp: +263712473551
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Jayden01
//   * Created By Github: DarkZero.
//   * Credit To Dark
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: JAYDEN01" //ur yt chanel name
global.socialm = "GitHub: darkzerocool" //ur github or insta name
global.location = "Pakistan, Islamabad, Islamabad" //ur location

//new
global.botname = 'XLICON-V4-MD' //ur bot name
global.ownernumber = [263771482732'] //ur owner number, dont add more than one
global.ownername = '𝐃𝚫𝚪𝐊 𝚭𝚵𝚪𝚯𝐂𝚯𝚯𝐋' //ur owner name
global.websitex = "https://youtu.com/@Jayden01"
global.wagc = "https://whatsapp.com/channel/0029VaZypgoIyPtaodVKp61o"
global.themeemoji = '⛩'
global.wm = "Xlicon Bot Inc."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V4-MD' //script link
global.packname = "𝐃𝚫𝚪𝐊 𝚭𝚵𝚪𝚯𝐂𝚯𝚯𝐋"
global.author = "MΛDΣ BY 𝐃𝚫𝚪𝐊 𝚭𝚵𝚪𝚯𝐂𝚯𝚯𝐋"
global.creator = "263712473551@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["263712473551"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
