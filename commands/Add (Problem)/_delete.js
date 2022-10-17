/*CMD
  command: /delete
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = params
if (id) {
  var task = Bot.getProperty("task", { list: {} })
  task.list[id] = Bot.setProperty("task", task, "json")
  var id_msg = request.message.message_id
  Api.deleteMessage({
    chat_id: "@err_hostphoto",
    message_id: pic
  })

  Api.editMessageText({
    message_id: id_msg,
    text: "Delete complete."
  })
}

