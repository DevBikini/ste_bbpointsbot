/*CMD
  command: /reward
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!isNumeric(message)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
var balance = Libs.ResourcesLib.userRes("balance")
if (message > balance.value()) {
  Bot.sendMessage("Insufficient balance")
  return
}
var id = options.id
var title = options.title
var description = options.description
var amount = message
var pic = options.pic
var code = options.code
var pic_all = Libs.ResourcesLib.anotherChatRes("pic_all", "global")
pic_all.add(+1)
Api.sendPhoto({
  chat_id: "@err_hostphoto",
  photo: pic,
  caption:
    "<b>Title: </b>" +
    title +
    "\n<b>Descriptions:</b> " +
    description +
    "\n\n<b>BJS:</b>\n<code>" +
    code +
    "</code>",
  parse_mode: "html"
})
Api.deleteMessage({ message_id: request.message_id })
Api.editMessageText({
  message_id: id,
  text:
    "<b>Title: </b>" +
    title +
    "\n<b>Descriptions:</b> " +
    description +
    "\n<b>Payment:</b> " +
    amount +
    " BBP\n\n<b>BJS:</b>\n<code>" +
    code +
    "</code>",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Delete", callback_data: "/delete " + id },
        { text: "Share", switch_inline_query: id }
      ]
    ]
  },
  parse_mode: "html",
  disable_web_page_preview: true
})
var task = Bot.getProperty("task", { list: {} })
task.list[id] = {
  id: id,
  title: title,
  description: description,
  amount: amount,
  pic: pic_all.value(),
  code: code,owner:user.telegramid
}
Bot.setProperty("task", task, "json")
