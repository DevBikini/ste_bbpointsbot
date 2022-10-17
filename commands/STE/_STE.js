/*CMD
  command: /STE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: STE
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = request.message.message_id
var inline_keyboard = [[{ text: "Back", callback_data: "/back" }]]
var task = Bot.getProperty("task", { list: {} })
var tak = Bot.getProperty("task")
if (!tak) {
  Api.editMessageText({
    message_id: id,
    text: "!No task Available",
    reply_markup: {
      inline_keyboard: [[{ text: "Back", callback_data: "/back" }]]
    },
    parse_mode: "html"
  })
  return
}
number = 0
stb_text = ""
for (var ind in task.list) {
  var number = number + 1
  var stb_text =
    stb_text +
    "\n<b>Tɪᴛʟᴇ</b>: " +
    task.list[ind].title +
    "\n» <b>Dᴏ Tᴀꜱᴋ</b>: /task_" +
    task.list[ind].id +
    "\n» <b>Pᴀʏᴍᴇɴᴛ</b>: " +
    task.list[ind].amount +
    " BBP\n• ━━━━━━━━━━━━━━━━━ •₱"
  var all = ""
  for (var index = 0; index < 10; index++) {
    var add = stb_text.split("₱")[index]
    if (add) {
      var all = all + add
    }
  }
}
if (number < 11) {
  var button = [[{ text: "Back", callback_data: "/back" }]]
} else {
  var button = [
    [{ text: "Next", callback_data: "/next 10 20" }],
    [{ text: "Back", callback_data: "/back" }]
  ]
}
Api.editMessageText({
  message_id: id,
  text:
    "📝<b> Tᴏᴛᴀʟ Tᴀꜱᴋꜱ Aᴠᴀɪʟᴀʙʟᴇ</b>: " +
    number +
    "\n• ━━━━━━━━━━━━━━━━━ •" +
    all,
  reply_markup: {
    inline_keyboard: button
  },
  parse_mode: "html"
})

