/*CMD
  command: /sample3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Generate webhook link for BB Point Bot
let url = Libs.Webhooks.getUrlFor({
  command: "onBBPointIncome",
  user_id: user.id
})
var admin = 2110220740
if (admin == user.telegramid) {
  Bot.sendMessage(
    "Set this url in [@BBPointBot](https://t.me/BBPointBot?start=link) " +
      "bot for notification." +
      "\n\nCommand [@BBPointBot > /link](https://t.me/BBPointBot?start=link) "
  )

  // send url without markup
  var pic_all = Libs.ResourcesLib.anotherChatRes("pic_all", "global")
  //https://t.me/err_hostphoto/5
  //pic_all.set(5)
  //Bot.setProperty("task", "", "json")
  Api.sendMessage({ text: url })
}

