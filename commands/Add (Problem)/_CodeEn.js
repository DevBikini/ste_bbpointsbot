/*CMD
  command: /CodeEn
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
var pic = options.pic
var opt = options.change
Api.editMessageText({
  message_id: id,
  text: "<b>Enter Price or Reward of your problem.</b>",
  reply_markup: {
    inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
  },
  parse_mode: "html"
})
Api.deleteMessage({ message_id: request.message_id })
Bot.run({
  command: "/reward",
  options: {
    id: id,
    title: title,
    description: description,
    pic: pic,
    code: message,
    opt: opt
  }
})

