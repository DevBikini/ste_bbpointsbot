/*CMD
  command: /withdrawn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = options.id
var balance = Libs.ResourcesLib.userRes("balance")
if (!isNumeric(message)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  Bot.run({ command: "/withdrawn", options: { id: id } })
  return
}
if (message > balance.value()) {
  Bot.sendMessage("Insufficient balance")
  Bot.run({ command: "/withdrawn", options: { id: id } })
  return
}
var webhookUrl = Libs.Webhooks.getUrlFor({
  command: "/onTransfer",
  user_id: user.id
})
// make transfer request to BB Point bot
balance.add(-parseFloat(message))
HTTP.post({
  url:
    "PERSONAL WEBHOOK",
  body: {
    // BB Points amount
    amount: parseInt(message),
    // transfer BB Points for current user
    to_tg_id: user.telegramid,
    // note for @bbpoints channel
    note: "#testTransfer by " + bot.name,
    webhookUrl: webhookUrl,
    secret: "PERSONAL SECRET" // from step 1
  }
})
Api.editMessageText({
  message_id: id,
  text: "Withdrawal in Progress",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Back",
          callback_data: "/back"
        }
      ]
    ]
  },
  parse_mode: "html"
})
