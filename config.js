const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263719532041";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_02_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDMzLFxuICAgICAgICA5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldjWFNzd2t6aUUyNHBuYklpbTk3R0c0NmlHWGxXa0lUWGswMUdGMTJTYms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkUySElweE1lU3RlOG5odnIyNlJzVUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjU4OThkNGMtMDQ4NC00MTk5LWI3MTEtMjRhMzkxYjQ0MDIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTM1LFxuICAgICAgMTg1LFxuICAgICAgMTQsXG4gICAgICAzMCxcbiAgICAgIDE3LFxuICAgICAgMTc3LFxuICAgICAgMTg0LFxuICAgICAgNDEsXG4gICAgICAyMyxcbiAgICAgIDQ5LFxuICAgICAgMTcyLFxuICAgICAgNCxcbiAgICAgIDM2LFxuICAgICAgMTE1LFxuICAgICAgMzAsXG4gICAgICA2MCxcbiAgICAgIDkzLFxuICAgICAgMjI0LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDc3LFxuICAgICAgMjUyLFxuICAgICAgMTkyLFxuICAgICAgMTM2LFxuICAgICAgMTYwLFxuICAgICAgMjM2LFxuICAgICAgMTg3LFxuICAgICAgMTAyLFxuICAgICAgMjQ2LFxuICAgICAgMjQxLFxuICAgICAgMTMyLFxuICAgICAgMTQ3LFxuICAgICAgNDEsXG4gICAgICAxNTIsXG4gICAgICAyMjAsXG4gICAgICA3OSxcbiAgICAgIDIwNixcbiAgICAgIDIwMixcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNaUkxQRFg0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODMzMzI4OTg6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJwcmVudXRjbGFyaXR5XCIsXG4gICAgXCJsaWRcIjogXCIyMjI4MTg5OTQyNDU4NTA6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldTdHBJREVLckZ1YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDd1k5MzFWem9PcjdQR3JGaHBUWG1WTkNtM3ZaVk8vSS96NTdwaWViY21vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBMaElqMmxmVzVaSnlzSGwzQjV5Y2JrNVVSRUZ2UEhXbCtmdGRoZXJscERnUEpKd290QU0rcHR2cDB3MEllYThiQUc5R2RxMUxZTzFLUmw5OVhRQUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl3MW56OHlGRXJwQnllbDMrOGIvZTdpaGtSU0JFQ0p3SUJ2M0R2bC90cHJwSythNTYwdy95OHd1YzdXTHVHU2JkeGpCSzRaWTgzTzI3MXgwQ2QxNkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MzMzMjg5ODo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MDQ1NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc1Ry5qc29uIjogIntcImtleURhdGFcIjpcIi9yRCtlZEI4ZWxNZFJwdXVuRVVvSGkxdEhObWhsTDVXSEFmejlFWlM0NDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQzOTQyMjI2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "S",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
