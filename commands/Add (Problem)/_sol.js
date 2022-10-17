/*CMD
  command: /sol
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Add (Problem)
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
return
}
Bot.run({ command: "/solved", options: { id: params } })
