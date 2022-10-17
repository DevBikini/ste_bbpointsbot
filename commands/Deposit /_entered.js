/*CMD
  command: /entered
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = options.id
if (!isNumeric(message)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
Api.editMessageText({
  message_id: id,
  text: "<b>«« Click the button to pay »»</b>",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Pay Now",
          url:
            "https://t.me/BBPointBot?start=req1480-" +
            message +
            "-points-to-2110220740"
        }
      ]
    ]
  },
  parse_mode: "html"
})
