/*CMD
  command: /solved
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add (Problem)
  answer: *Send new code!*
  keyboard: Cancel ❌
  aliases: 
CMD*/

if (message == "Cancel ❌") {
  Api.sendMessage({
    text: "<b>Cancelled</b>",
    parse_mode: "html",
    reply_markup: JSON.stringify({
      hide_keyboard: true
    })
  })
  return
}
var nbb_ticket = Bot.getProperty(options.id)
if (!nbb_ticket) {
  var solve = Libs.ResourcesLib.userRes("solved")
  var balance = Libs.ResourcesLib.userRes("balance")
  var earned = Libs.ResourcesLib.userRes("earned")
  var badg = GetBadge(solve.value()).badges
  if ((badg == "Master+") | (badg == "Pro")) {
    var task = Bot.getProperty("task", { list: {} })
    var amount = task.list[options.id].amount
    Api.sendMessage({
      text:
        "🎉 Congratulations Bot automatically approved your code!! <b>You earned " +
        amount +
        " BBP</b>",
      parse_mode: "html",
      reply_markup: JSON.stringify({
        hide_keyboard: true
      })
    })
    Api.sendMessage({
      chat_id: task.list[options.id].owner,
      text: "<b>Your new BJS code</b>:\n<code>" + message + "</code>",
      parse_mode: "html"
    })
    balance.add(+amount)
    earned.add(+amount)
    solve.add(+1)
    //task delete current
    Api.deleteMessage({
      chat_id: "@err_hostphoto",
      message_id: task.list[options.id].pic
    })
    task.list[options.id] = Bot.setProperty("task", task, "json")

    Bot.setProperty(options.id, { yes: "yes" }, "json")
    return
  }
//manually 
  Api.sendMessage({
    text: "<b>Sended please wait for approval.</b>",
    parse_mode: "html",
    reply_markup: JSON.stringify({
      hide_keyboard: true
    })
  })
  Bot.setProperty(user.telegramid + options.id, { code: message }, "json")
  Api.sendMessage({
    chat_id: 2110220740,
    text:
      "<b>Task ID</b>: /task_" +
      options.id +
      "\n<b>BJS</b>:\n<code>" +
      message +
      "</code>",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅ Approve",
            callback_data: "/approve " + options.id + "@×" + user.telegramid
          },
          {
            text: "❌ Disapprove",
            callback_data: "/decline " + options.id + "@×" + user.telegramid
          }
        ]
      ]
    },
    parse_mode: "html"
  })
  Bot.setProperty(options.id, { yes: "yes" }, "json")
  return
}
Api.sendMessage({
  text:
    "<b>Someone, try to solve this task please wait for disapproval to submit your code.</b>",
  parse_mode: "html",
  reply_markup: JSON.stringify({
    hide_keyboard: true
  })
})
