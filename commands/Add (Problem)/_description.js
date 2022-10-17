/*CMD
  command: /description
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = options.id
var title = options.title
Api.editMessageText({
  message_id: id,
  text: "<b>Enter a Error Picture of your Problem</b>",
  reply_markup: {
    inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
  },
  parse_mode: "html"
})
Api.deleteMessage({ message_id: request.message_id })
Bot.run({
  command: "/errPic",
  options: { id: id, title: title, description: message }
})
