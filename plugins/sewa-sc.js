import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*MAAF SC TIDAK SAYA PERJUAL BELIKAN❗*'
`

let td = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: wm,
            footer: wm2,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🐈 Github',
                        url: sgh
                    }
                },
                {
                    urlButton: {
                        displayText: 'Save Owner Dong🗿',
                        url: 'https://wa.me/6285172446692',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📛 ᴊᴀɴɢᴀɴ ᴅɪ ᴋʟɪᴋ ᴋᴀᴋ',
                        url: 'https://instagram.com/imleviofc'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📊 ʙᴏᴛ ɪɴꜰᴏ',
                        id: '.botinfo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💬 ʜᴀʟʟᴏ ʙᴏᴛ',
                        id: '.salken'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
await conn.sendButton(m.chat, `Jangan Ngambek\n➘\nKalo Sc nya Ga Dijual❗\n`,wm + '\n\n' + botdate, giflogo, [['🥞OKE','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'BOT BY Levi',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgc
                      }}
})
}
handler.help = ['buyscbot','beliscript']
handler.tags = ['store']
handler.command = /^(beliscript|buyscbot)$/i

handler.register = true
handler.exp = 3

export default handler
