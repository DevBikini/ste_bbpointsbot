/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//valid name
function valid_name() {
  if (user.username) {
    return "@" + user.username
  }
  return user.first_name ? user.first_name : user.last_name
}
//keyboard
function inline_keyboard() {
  return [
    [
      { text: "Account", callback_data: "/account" },
      { text: "STE BB Points", callback_data: "/STE" }
    ],
    [{ text: "Add (Problem)", callback_data: "/Problem" }]
  ]
}
//numeric
function isNumeric(value) {
  return value.match(/^-{0,1}\d+$/)
}
//badge
function GetBadge(solved) {
  if (solved < 10) {
    var link = "<a href='https://telegra.ph/Badge-10-16-11'>Member</a>"
    var badges = "Member"
  } else {
    if (solved < 25) {
      var link = "<a href='https://telegra.ph/Badge-10-16-11'>Coder</a>"
      var badges = "Coder"
    } else {
      if (solved < 50) {
        var link = "<a href='https://telegra.ph/Badge-10-16-11'>Master</a>"
        var badges = "Master"
      } else {
        if (solved < 100) {
          var link = "<a href='https://telegra.ph/Badge-10-16-11'>Master+</a>"
          var badges = "Master+"
        } else {
          var link = "<a href='https://telegra.ph/Badge-10-16-11'>Pro</a>"
          var badges = "Pro"
        }
      }
    }
  }
  return { badges: badges, link: link }
}
//task
function GetTask(msg) {
  var id = msg.split("/task_")[1]
  if (id) {
    var task = Bot.getProperty("task", { list: {} })
    if (task.list[id]) {
      var pic = task.list[id].pic
      HTTP.post({
        url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
        body: {
          chat_id: user.telegramid,
          from_chat_id: "@err_hostphoto",
          message_id: pic,
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Solve", callback_data: "/sol " + id },
                { text: "Share", switch_inline_query: id }
              ]
            ]
          }
        }
      })
    }
  }
}

