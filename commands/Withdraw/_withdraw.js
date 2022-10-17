/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = request.message.message_id
var inline_keyboard = [[{ text: "Back", callback_data: "/back" }]]
Api.editMessageText({
  message_id: id,
  text: "<b>«« Enter BBP you want to Withdraw »»</b>",
  reply_markup: {
    inline_keyboard: inline_keyboard
  },
  parse_mode: "html"
})
Bot.run({ command: "/withdrawn", options: { id: id } })
