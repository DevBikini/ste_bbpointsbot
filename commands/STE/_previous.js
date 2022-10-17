/*CMD
  command: /previous
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
var number_1 = parseFloat(next[0]) - 9
var number_2 = parseFloat(next[1]) - 10
var dor = number_1-1
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
  for (var index = dor; index < number_2; index++) {
    var add = stb_text.split("₱")[index]
    if (add) {
      var all = all + add
    }
  }
}
var dx = number_2 + 10
var xd = number_2 + 11
if (number < xd) {
  if (number < 11) {
    var button = [
      [
        {
          text: "Next",
          callback_data: "/next " + number_2 + " " + dx
        }
      ],
      [{ text: "Back", callback_data: "/back" }]
    ]
  } else {
    var button = [
      [
        { text: "Previous", callback_data: "/previous "+dor+" "+number_2 },
        { text: "Next", callback_data: "/next " + number_2 + " " + dx }
      ],
      [{ text: "Back", callback_data: "/back" }]
    ]
  }
} else {
  var button = [
    [{ text: "Next", callback_data: "/next " + number_2 + " " + dx }],
    [{ text: "Back", callback_data: "/back" }]
  ]
}
Api.editMessageText({
  message_id: id,
  text:
    "📝<b> tTᴏᴛᴀʟ Tᴀꜱᴋꜱ Aᴠᴀɪʟᴀʙʟᴇ</b>: " +
    number +
    "\n• ━━━━━━━━━━━━━━━━━ •" +
    all,
  reply_markup: {
    inline_keyboard: button
  },
  parse_mode: "html"
})
