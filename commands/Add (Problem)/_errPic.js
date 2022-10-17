/*CMD
  command: /errPic
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
var description = options.description
if (!request.photo[0]) {
  Bot.sendMessage("❌ Not a Photo")
  return
}
Api.editMessageText({
  message_id: id,
  text: "<b>Enter a Code of your Error Problem</b>",
  reply_markup: {
    inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
  },
  parse_mode: "html"
})
Api.deleteMessage({ message_id: request.message_id })
Bot.run({
  command: "/CodeEn",
  options: {
    id: id,
    title: title,
    description: description,
    pic: request.photo[0].file_id
  }
})
