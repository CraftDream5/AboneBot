const dc = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
    if(!message.guild) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
**Bu Komutu Sadece Sunucularda Kullanabilirsiniz.**
==============================================`)) 
    const ayetkili = db.fetch(`ayetki.${message.guild.id}`)
const arol = db.fetch(`arol.${message.guild.id}`)
const sayı = db.fetch(`asay.${message.guild.id}.${message.author.id}`)
const ssayı = db.fetch(`assay.${message.guild.id}`)
const yetkiler = {
    "x": "`Yönetici`",
    "x2": "`Üyeleri Yasakla`",
    "x3": "`Üyeleri At`",
    "x4": "`Mesajları Yönet`",
    "x5": "`Abone Yetkilisi`",
    "x6": "`Abone`"
}
message.channel.send(new dc.MessageEmbed().setTitle(`${message.guild.name}`).setDescription(`
==============================================
**Şuanda Toplam ${ssayı ? ssayı : 0} Kişiye Abone Rolü Verilmiş.**

**Sen Toplam ${sayı ? sayı : 0} Kişiye Abone Rolü Vermişsin.**
==============================================
`))
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['s'],
    perm: 0
  }
  exports.help = {
    name: 'say'
  }