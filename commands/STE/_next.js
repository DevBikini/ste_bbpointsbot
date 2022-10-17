/*CMD
  command: /next
  help: 
  need_reply: 
  auto_retry_time: 
  folder: STE
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = request.message.message_id
var next = params.split(" ")
var number_1 = parseFloat(next[0]) + 1
var number_2 = parseFloat(next[1]) + 10
var task = Bot.getProperty("task", { list: {} })
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
  for (var index = parseFloat(next[0]); index < parseFloat(next[1]); index++) {
    var add = stb_text.split("₱")[index]
    if (add) {
      var all = all + add
    }
  }
}
var dam = parseFloat(next[1]) + 10
var no = number_2 + 1
if (number < no) {
  var button = [
    [
      {
        text: "Previous",
        callback_data:
          "/previous " + parseFloat(next[0]) + " " + parseFloat(next[1])
      },
      {
        text: "Next",
        callback_data: "/next " + parseFloat(next[1]) + " " + dam
      }
    ],
    [{ text: "Back", callback_data: "/back" }]
  ]
} else {
  var button = [
    [
      { text: "Next", callback_data: "/next " + number_1 + " " + number_2 },
      { text: "Back", callback_data: "/back" }
    ]
  ]
}
if (!all) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❗️ Not Available Now",
    show_alert: true
  })
  return
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
