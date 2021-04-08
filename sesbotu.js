const { Discord, Client, MessageEmbed, WebhookClient} = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const fs = require('fs');
const express = require('express');
const request = require('request')
const app = express();
client.on('voiceStateUpdate', (oldState, newState) => {
     const hentrateyitkanal = "829425672886812698" // teyit kanal ıd
     let teyitkanaltani = client.channels.cache.get(hentrateyitkanal); 
     if(!teyitkanaltani) return console.log('Kanal Bulunamadı.');
     let member = client.users.cache.get(newState.member.id);
     if(!newState.channelID === hentrateyitkanal);
     if(!oldState.channelID === hentrateyitkanal);
         teyitkanaltani.join().then(connection => { 
        if (newState.channelID === hentrateyitkanal){
        if(newState.member.roles.cache.get('829425672539734049')){ //teyitsiz rol id
       const dispatcher = connection.play(require("path").join(__dirname, './kayit.mp3'));
            dispatcher.on('end', () => {
                dispatcher.destroy();
        return;
            });
        }
        if(newState.member.roles.cache.get('829425672623226927')){ //yetkili rol id
       const dispatcher = connection.play(require("path").join(__dirname, './yetkili.mp3')); //Buraya yetkili girince calisacak mp3   
            dispatcher.on('end', () => {
                dispatcher.destroy();
        return;
            });
        }
}
});
});
client.login('ODI5NDI2MjU4NzUxMjU4Njg1.YG39Zg.iw_BblM2oRHjhxJDPjUZmug6dqc').then(c => console.log(`${client.user.tag} # Ses botu giriş sağladı!`)).catch(err => console.error("Bot giriş bilgileri yanlış olduğundan bota giriş yapılamadı!"));

client.on("ready", async () => {
  client.user.setActivity(`⋦ Kapsent#9999`, {
type: "STREAMING",
url: "https://www.twitch.tv/poncikpogaca_"})
    .then(presence => console.log(`HERŞEY TAMAM AGAM ALTA ALABİLİRSİN BOTU`))
    .catch(console.error);

});
