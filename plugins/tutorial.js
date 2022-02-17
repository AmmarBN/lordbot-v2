const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
let logo = global.logoowner
  let ext= `
╭─「 *Tutorial Main Lord Botz* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *.claim*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│• *.mulung*
│• *.adventure*
│• *.petualang*
│   Untuk mencari resource seperti 
│   Money, Exp, dll..,dibutuhkan  
│   minimal 80 nyawa untuk bisa 
│   melakukannya dan, kamu tidak 
│   dapat spam karena ada delay 5 
│   menit
│• *.use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│• *.shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *.use potion <jumlah>*
│   untuk menggunakan potion
│• *.shop <args>*
│   Untuk membeli atau menjual sesuatu
│• *.shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *.profile*
│• *.pp*
│• *.profil*
│   untuk mengetahui No whatsapmu, dll
│• *.inv*
│• *.inventory*
│• *.bal*
│   Untuk mengecek nyawa, money, dll.
│• *.judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
│ *©Lord Bot 2020-2021*
╰─「 *Tutorial Main Lord Botz* 」
`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = fs.readFileSync(`./src/Capture 2022-02-17 10.05.20.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "───────[ Tutorial ]───────",
        "description": '\n\n' + ext,
        "retailerId": "Berikut Tutorial Main Lord Botz ^~^",
        "url": '',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6288229683561@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)

}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
