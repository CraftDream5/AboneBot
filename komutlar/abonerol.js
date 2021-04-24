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
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`**Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsiniz. \nGerekli Yetki:** ${yetkiler.x}`)) 
let m = ["ayarla", "sıfırla"]

if(!args[0]) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
**Bir Seçenek Belirtmelisin.** \`ayarla / sıfırla\`
==============================================`))
if(!m.includes(args[0])) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
**Sadece \`ayarla / sıfırla\` Seçeneklerini Kullanabilirsin.**
==============================================`))

if(args[0] === "ayarla"){
const arol1 = message.mentions.roles.first()
if(arol) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
==============================================
${yetkiler.x6} **Rolü Zaten Ayarlı! Sıfırlamak İstersen** \`${prefix}abone-rol sıfırla\`
==============================================`))


  if(!arol1) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
  ==============================================
  ${yetkiler.x6} **Olarak Ayarlancak Rolü Etiketle!**
  ==============================================`))
db.set(`arol.${message.guild.id}`, arol1.id)
message.channel.send(new dc.MessageEmbed().setTitle(`BAŞARILI`).setDescription(`
==============================================
${yetkiler.x6} **Olacak Rol Başarıyla Ayarlandı.**
==============================================`))
}

if(args[0] === "sıfırla"){
    if(!arol) return message.channel.send(new dc.MessageEmbed().setTitle(`HATA`).setDescription(`
    ==============================================
    ${yetkiler.x6} **Rolü Zaten Ayarlı Değil! Ayarlamak İstersen** \`${prefix}abone-rol ayarla\`
    ==============================================`))
    
    db.delete(`arol.${message.guild.id}`)
    message.channel.send(new dc.MessageEmbed().setTitle(`BAŞARILI`).setDescription(`
    ==============================================
    ${yetkiler.x6} **Olan Rol Başarıyla Sıfırlandı.**
    ==============================================`))
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['abone-rol'],
    perm: 0
  }
  exports.help = {
    name: 'abone-rol'
  }

  