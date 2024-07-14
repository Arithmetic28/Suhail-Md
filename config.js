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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_50_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJib1Q0aGc3OU1EVk0rN3VyN3lZeGMwQlcwY2hHM1ErbWNQUGZWby9FdWVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxdE1ldnhoc1JOYTQ0YWxUNXRPZjBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5ZDhhMmIxLTM4MTctNDFjMy04YmVmLTkxYjBjNzIxMjIyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA0MixcbiAgICAgIDExMSxcbiAgICAgIDE2MixcbiAgICAgIDEwMixcbiAgICAgIDEwMyxcbiAgICAgIDAsXG4gICAgICAxMTEsXG4gICAgICAzMSxcbiAgICAgIDgsXG4gICAgICAxNDksXG4gICAgICAxMTMsXG4gICAgICAxMDMsXG4gICAgICA4OCxcbiAgICAgIDMxLFxuICAgICAgNTIsXG4gICAgICA2NSxcbiAgICAgIDMzLFxuICAgICAgMTMsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMTY1LFxuICAgICAgMTQ4LFxuICAgICAgMTcxLFxuICAgICAgODAsXG4gICAgICAxMjMsXG4gICAgICAxNzQsXG4gICAgICA4OSxcbiAgICAgIDIyMCxcbiAgICAgIDEwOSxcbiAgICAgIDExLFxuICAgICAgMjAzLFxuICAgICAgMTcsXG4gICAgICAxNzcsXG4gICAgICAxODksXG4gICAgICAxOTMsXG4gICAgICA2MSxcbiAgICAgIDI1MixcbiAgICAgIDIxMyxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYVjVaRDJTTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgzMzMyODk4OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXJpdGhtZXRpYzI4XCIsXG4gICAgXCJsaWRcIjogXCIyMjI4MTg5OTQyNDU4NTA6ODFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNTdHBJREVKV3Z6N1FHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDd1k5MzFWem9PcjdQR3JGaHBUWG1WTkNtM3ZaVk8vSS96NTdwaWViY21vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlovdHBrZTFHWjAzY2ZvaUN5Zzd4YUQ4U1IyT0F0SlI1bDJqa3NyeGlGL0Q1U2xZZit3M2N1cHZobnNiSGtoUEhvZDN5eEVJamlSaFVUekh4cnkzaEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImk1QW1oZFpkakpYZDNDRU9pT3pPdmliTHRFTWgxelp3bGRjbDdTVC8zSUFyZkZpUDBJUk5FNmxCR0R5d0RLOTZZU2ZxeTJTeEkwTTJ1SEQ5QVpiSkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MzMzMjg5ODo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NjUwMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc1Ry5qc29uIjogIntcImtleURhdGFcIjpcIi9yRCtlZEI4ZWxNZFJwdXVuRVVvSGkxdEhObWhsTDVXSEFmejlFWlM0NDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQzOTQyMjI2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
