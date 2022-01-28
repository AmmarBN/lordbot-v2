let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*Lord Botz Menggunakan Script*
github.com/AmmarBN/lordbot-aq-tes
_*Jangan Lupa Follow Sama Kasi Star Ya kak*_

`.trim(), m)
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(script)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
