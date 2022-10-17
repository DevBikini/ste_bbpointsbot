/*CMD
  command: /enter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  var id = request.message.message_id
  Api.editMessageText({
    message_id: id,
    text: "<b>«« Click the button to pay »»</b>",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Pay Now",
            url:
              "https://t.me/BBPointBot?start=req1480-"+params+"-points-to-2110220740"
          }
        ]
      ]
    },
    parse_mode: "html"
  })
  return
}
var id = request.message.message_id
var inline_keyboard = [[{ text: "Back", callback_data: "/back" }]]
Api.editMessageText({
  message_id: id,
  text: "<b>«« Enter BBP you want to Deposit »»</b>",
  reply_markup: {
    inline_keyboard: inline_keyboard
  },
  parse_mode: "html"
})
Bot.run({ command: "/entered", options: { id: id } })
