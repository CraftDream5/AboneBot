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
const yetkiler = {
    "x": "`Yönetici`",
    "x2": "`Üyeleri Yasakla`",
    "x3": "`Üyeleri At`",
    "x4": "`Mesajları Yönet`",
    "x5": "`Abone Yetkilisi`",
    "x6": "`Abone`"
}

message.channel.send(new dc.MessageEmbed().setTitle(`${client.user.username}`).setDescription(`
**Botumuz Abone Ile Alakalı Bir Botdur**

» Prefixim: **${prefix}**
» Dil: **TR**
`)
  .addField('**» Abone Bot Komutları**',`
💛 » [${prefix}abone-rol](https://discord.gg/nTuSYZ9xj5) Abone Rolünü Ayarlansını.
💛 » [${prefix}abone-yetkilisi](https://discord.gg/nTuSYZ9xj5) Abone Yetkilisini Ayarlarsınız.
💛 » [${prefix}abone](https://discord.gg/nTuSYZ9xj5) Abone Verirsiniz.
`)
  .addField('**» Genel Komutlar**',`
💛 » [${prefix}istatistik](https://discord.gg/nTuSYZ9xj5) Bot Istatistigini Atar.
💛 » [${prefix}say](https://discord.gg/nTuSYZ9xj5) Total Ve Senin Abone Verme Sayini Atar.
`)
.addField('**» Destek Sunucum**','[Destek Sunucum](https://discord.gg/nTuSYZ9xj5)'))
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    perm: 0
  }
  exports.help = {
    name: 'yardım'
  }