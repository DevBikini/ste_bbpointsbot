/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
GetTask("/task_"+params)
return
}
Api.sendMessage({
  text:
    "Hello, " +
    valid_name() +
    " Welcome to STE (Solve To Earn BBP)\n\n<b>What is BBP</b> is a currency exchange for billing Iterations to run your bot without ads",
  reply_markup: {
    inline_keyboard: inline_keyboard()
  },
  parse_mode: "html"
})
