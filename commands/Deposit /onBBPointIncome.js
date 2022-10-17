/*CMD
  command: onBBPointIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var data = JSON.parse(content)
var amount = data.amount
var chat_id = data.user.telegramid
var balance = Libs.ResourcesLib.anotherUserRes("balance", chat_id)
balance.add(+amount)
Api.sendMessage({
  chat_id: chat_id,
  text:
    "Your Deposit of <b>" +
    amount +
    " BBP</b> Has been successfully credits in your balance",
  parse_mode: "html"
})
