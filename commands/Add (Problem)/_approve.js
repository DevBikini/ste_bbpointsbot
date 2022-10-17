/*CMD
  command: /approve
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
if (!task.list[id]) {
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
var solve = Libs.ResourcesLib.anotherUserRes("solved", uid)
var amount = task.list[id].amount
Api.sendMessage({
  chat_id: uid,
  text:
    "🎉 Congratulations administrator approved your code!! <b>You earned " +
    amount +
    " BBP</b>",
  parse_mode: "html"
})
Api.sendMessage({
  chat_id: task.list[id].owner,
  text:
    "<b>Your new BJS code</b>:\n<code>" +
    Bot.getProperty(uid + id).code +
    "</code>",
  parse_mode: "html"
})
var balance = Libs.ResourcesLib.anotherUserRes("balance", uid)
balance.add(+amount)
var earned = Libs.ResourcesLib.anotherUserRes("earned", uid)
earned.add(+amount)
solve.add(+1)
Api.editMessageText({
  message_id: message_id,
  text: "✅<b> Approved</b>",
  parse_mode: "html"
})
//task delete current
Api.deleteMessage({
  chat_id: "@err_hostphoto",
  message_id: task.list[id].pic
})
task.list[id] = Bot.setProperty("task", task, "json")
