let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐌𝐞𝐧𝐬𝐚𝐣𝐞 :  ${pesan}`
let teks = ` 𝐑𝐞𝐚𝐥 𝐡𝐚𝐬𝐭𝐚 𝐥𝐚 𝐦𝐮𝐞𝐫𝐭𝐞 𝐨í𝐬𝐭𝐞 !𝐡𝐢𝐣𝐮𝐞𝐥𝐚𝐠𝐫𝐚𝐧𝐩𝐮𝐭𝐚! \n\n ${oi}\n\n 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👹≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐦𝐚𝐠𝐚_𝟕𝟐𝟑 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
