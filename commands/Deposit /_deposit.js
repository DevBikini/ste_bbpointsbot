/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = request.message.message_id
var inline_keyboard = [
  [
    { text: "1", callback_data: "/enter 1" },
    { text: "Enter", callback_data: "/enter" }
  ],
  [{ text: "Back", callback_data: "/back" }]
]
Api.editMessageText({
  message_id: id,
  text: "How many BBP Do you want to Deposit",
  reply_markup: {
    inline_keyboard: inline_keyboard
  },
  parse_mode: "html"
})
