let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087708773367]
│ • Smartfren [088229683561]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288229683561
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
