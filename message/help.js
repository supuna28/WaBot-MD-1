exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, !

*Information Bot*
≻ ${prefix}menu
≻ ${prefix}donasi
≻ ${prefix}speed
≻ ${prefix}runtime

*Converter/Tools*
≻ ${prefix}sticker
≻ ${prefix}toimg
≻ ${prefix}tovid

*Downloader*
≻ ${prefix}tiktok
≻ ${prefix}ytmp4
≻ ${prefix}ytmp3
≻ ${prefix}instagram
≻ ${prefix}facebook

    `
}
