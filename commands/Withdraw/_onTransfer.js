/*CMD
  command: /onTransfer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content);

// You can inspect all passed data:
// Bot.inspect(json)

if(json.error){
//refund withdrawal 
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(+json.amount)
  Bot.sendMessage("Error: " + json.error.title);
  Bot.sendMessage("Code: " + json.error.code);
  // error codes:
  // 1 - You do not have BB Points for transfer
  return
}

// BB Points transferred to current user
let admin_bb_points = json.owner.bb_points - json.amount;

Bot.sendMessage(
    "BB Points transferred:\n" +
    json.amount + "💎 BB Points to tg id: " + user.telegramid + 

    "\n\nAdmin: @" + json.owner.username + 
       "\n have now: " + String(admin_bb_points) + "💎 BB Points"
)


