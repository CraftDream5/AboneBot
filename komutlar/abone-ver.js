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
if(!ayetkili) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
${yetkiler.x5} **Rolü Ayarlı Değil! Ayarlamak İstersen** \`${prefix}abone-yetkilisi ayarla\`
==============================================`))
if(!message.member.roles.cache.has(ayetkili)) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
**Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsiniz. \nGerekli Yetki:** ${yetkiler.x5}
==============================================`)) 
let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

if(!abonekisi)  return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
**Abone Rolü Verilecek Kişiyi Belirtmen Gerek!**
==============================================`))
await(abonekisi.roles.add(arol))

 message.channel.send(new dc.MessageEmbed().setTitle(`BAŞARILI`).setDescription(`
 ==============================================
 **${abonekisi} Adlı Kişiye <@&${arol}> Adlı Rol Başarıyla Verildi.**
 ==============================================`))
 db.add(`asay.${message.guild.id}.${message.author.id}`, 1)
 db.add(`assay.${message.guild.id}`, 1)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['abone'],
    perm: 0
  }
  exports.help = {
    name: 'a'
  }