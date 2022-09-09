//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is ☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
🔥
http://wa.me//+94767343564😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94767973534'] //Owner number in aive msg
global.premium = ['+94767973534'] //Owner Number info
global.ownernomer = '+94767973534' //Owner Number <<<

global.ownername = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
' //Owner Name
global.botname = ' ☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
' //Bot Name

global.button = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtube.com/channel/UC69O34ynMDdjp4Nd4ntGqEQ' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //Bot Pacage Name
global.author = '😎☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //Session Name!
global.sp = '🤡' //A Charactor
global.dragonemoji = '🤡' // Menu emoji
global.footer = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://youtube.com/channel/UCYqsy4l8eHh0kFVF6IUSuiQ' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅ ☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    admin: 'Only Admins can use it!😉☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    botAdmin: 'Bot wants to be an Admin😥☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    owner: 'Only Owner can use this!😉☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    group: 'Feature Used Only For Groups!☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    private: 'This Features Only For Private Chat!☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    bot: 'This Feature Is Only For Bot😝☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    wait: '👉👈Pleas Wait...☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    error: 'Error!!! Maybe Api Key Is Expired🤔!☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours ☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠
',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
