const ytdl = require('ytdl-core');
let kontrol = false;
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(oldState, newState) { //bot.on('voiceStateUpdate', async (oldMember, newMember) => { ile aynı işlev

        //console.log("newid:"+newState.channelID)
        //console.log("oldid:"+oldState.channelID)
        if (newState.channelID == "817820963525623879") //kanal id si //BURA(kanal adı)
        {
            try {
                if (newState.channel) {

                    if (newState.member.id != "471995758397358105") {
                        if (newState.member._roles.includes("817820884462469132")) {
                          console.log("yeni kayıt geldi") //istersen bir şey tetikletebiliriz ?
                        //BEKLETME
                        //await sleep(1000);
                        //BEKLETME
                        const connection = await newState.channel.join();
                        if (!kontrol) {
                            kontrol = true;
                            let dispatcher = await connection.play('../kayit.mp3');
                            dispatcher.on("finish", () => {
                                kontrol = true;
                            })
                        }
                    }
                }
            } else {
                console.log('ses kanalında değil');
            }
        } catch (e) {
            console.log(e);
            return messageUtil.error(e, message, this);
        }
    }
}
};