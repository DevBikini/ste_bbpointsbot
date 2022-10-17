/*CMD
  command: /title
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = options.id
if (message.length > 20) {
  Bot.sendMessage("❌ Maximum 20  Characters")
  return
}
Api.editMessageText({
  message_id: id,
  text: "<b>Enter a Description of your Problem</b>",
  reply_markup: {
    inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
  },
  parse_mode: "html"
})
Api.deleteMessage({ message_id: request.message_id })
Bot.run({ command: "/description", options: { id: id, title: message } })

