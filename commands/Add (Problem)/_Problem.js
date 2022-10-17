/*CMD
  command: /Problem
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = request.message.message_id
Api.editMessageText({
  message_id: id,
  text: "<b>Enter a Title of your Problem</b>",
  reply_markup: {
    inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
  },
  parse_mode: "html"
})
Bot.run({ command: "/title", options: { id: id } })
