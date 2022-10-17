if (!request.query) {
  return
}
var query = request.query.toLowerCase()
if (query) {
  GetName(params)
}

function GetName(name) {
  var task = Bot.getProperty("task", { list: {} })
  if (task.list[name]) {
    var list = []
    list.push({
      type: "article",
      id: "share",
      title: "Task",
      description: "ID",
      input_message_content: {
        message_text:
          "Please help me to solve my problem and take the reward\n\n<b>» Tɪᴛʟᴇ</b>: " +
          task.list[name].title +
          "\n<b>» Tᴀꜱᴋ ID</b>: " +
          name +
          "\n<b>» Pᴀʏᴍᴇɴᴛ</b>: " +
          task.list[name].amount +
          " BBP",

        parse_mode: "html",
        disable_web_page_preview: true
      },reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Try to Solve",
                url: "https://t.me/" + bot.name + "?start=" + name
              }
            ]
          ]
        }
    })
    Api.answerInlineQuery({
      inline_query_id: request.id,
      results: list,
      cache_time: 10
    })
  }
}
