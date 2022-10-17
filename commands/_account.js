/*CMD
  command: /account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var list = {
  bold_1: "<b>",
  bold_2: "</b>",
  mono_1: "<code>",
  mono_2: "</code>"
}
var balance = Libs.ResourcesLib.userRes("balance")
var solved = Libs.ResourcesLib.userRes("solved")
var earned = Libs.ResourcesLib.userRes("earned")
var text =
  "<b>(Earn BBP by solving a Task)</b>\n\n" +
  list.bold_1 +
  "ID: " +
  list.bold_2 +
  list.mono_1 +
  user.telegramid +
  list.mono_2 +
  list.bold_1 +
  "\nBalance: " +
  list.bold_2 +
  list.mono_1 +
  balance.value() +
  list.mono_2 +
  list.bold_1 +
  " (BBP)\nSolved: " +
  list.bold_2 +
  list.mono_1 +
  solved.value() +
  list.mono_2 +
  list.bold_1 +
  "\nBadge: " +
  list.bold_2 +
  GetBadge(solved.value()).link +
  list.bold_1 +
  "\nEarned: " +
  list.bold_2 +
  list.mono_1 +
  earned.value() +
  list.mono_2 +
  list.bold_1 +
  " (BBP)" +
  list.bold_2 +
  "\n\nThis bot created to improve your skills"
var inline_keyboard = [
  [
    { text: "Deposit", callback_data: "/deposit" },
    { text: "Withdraw", callback_data: "/withdraw" }
  ],
  [{ text: "Back", callback_data: "/back" }]
]
var id = request.message.message_id
Api.editMessageText({
  message_id: id,
  text: text,
  reply_markup: { inline_keyboard: inline_keyboard },
  parse_mode: "html",
  disable_web_page_preview: true
})

