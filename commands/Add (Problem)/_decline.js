/*CMD
  command: /decline
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var dat = params.split("@×")
var id = dat[0]
var uid = dat[1]
var task = Bot.getProperty("task", { list: {} })
var amount = task.list[id]
if (!amount) {
  Api.editMessageText({
    message_id: message_id,
    text: "<b>This Task Already Solve</b>",
    parse_mode: "html"
  })
  Api.sendMessage({
    chat_id: uid,
    text: "<b>Sorry, the task you submitted already solved by someone</b>",
    parse_mode: "html"
  })
  return
}
Api.sendMessage({
  chat_id: uid,
  text:
    "Your code <b>Disapprove by administrator\nlearn</b>: test your code before send and More practice",
  parse_mode: "html"
})
Api.editMessageText({
  message_id: message_id,
  text: "<b>❌ Disapprove</b>",
  parse_mode: "html"
})
Bot.setProperty(id, "", "string")
