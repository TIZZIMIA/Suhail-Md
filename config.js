const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349153252304";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "🤷🤷UNKNOWN🤷🤷",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_11_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5zT3FLYmJIK0hJRXNCcmV5OWY1N2FISU5yVjllaHVyMmY1ZjEwTzB3TWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9xcW9senNBU2pLM3RxcTdNOXlvYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzlmZmUyN2YtMzNlNy00MzFiLThhZTUtYWY0YjJlYTc0MTdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjcsXG4gICAgICA2MixcbiAgICAgIDE5NixcbiAgICAgIDQ1LFxuICAgICAgMTE1LFxuICAgICAgMTg4LFxuICAgICAgMjAwLFxuICAgICAgNjQsXG4gICAgICAxNzYsXG4gICAgICA4MyxcbiAgICAgIDIxNixcbiAgICAgIDUxLFxuICAgICAgMTIyLFxuICAgICAgMjM5LFxuICAgICAgMjM0LFxuICAgICAgNjQsXG4gICAgICA2MSxcbiAgICAgIDQ1LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTAzLFxuICAgICAgNDcsXG4gICAgICAxMTcsXG4gICAgICA0MCxcbiAgICAgIDI1MyxcbiAgICAgIDI0OSxcbiAgICAgIDEsXG4gICAgICAxODYsXG4gICAgICAyMzksXG4gICAgICA0NSxcbiAgICAgIDI1NCxcbiAgICAgIDI4LFxuICAgICAgMjQ1LFxuICAgICAgMTUzLFxuICAgICAgMTE4LFxuICAgICAgMTYzLFxuICAgICAgMTgzLFxuICAgICAgMjI0LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVERBTUNGV0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTMyNTIzMDQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzNzA3OTY4NjE0NTA4OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFh3M2VRRkVJYkF3cklHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4ZDROa21kMXlsbjJodnluVElDSWtKOWdUWm1tck1rdkp4NnZrMGhNTVRRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRqWllqa2FQYnRMV09vQnBYN2dTOVI1VWVsV3N3aWZkUmsxL0JDZlZnTllwb2E0aExaTVk5U1JsbEpOQ2VEZUl5a2hrUlU2VUcyTlp2Q093VzZLSmpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9aamp2dkUzZWw5LzFNMld2TWJ5cmk5RFVoY2JuNlV2S2t0dEg0UXZmMTZPNFdIOFd6bHRtNkh4N3ZFUzMwUzAydUthRkdMNUNCc1Nab0g5b2wrN2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTMyNTIzMDQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTU5ODgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHd5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMd3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4cUlMRXhOSzdIWERmaStld1BZUjQvUVRSZjQ2aXFpenJKSHZ3aWpvV3k4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTM0MzA2NDUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzExNjkwODQ5NzkxXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
