/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request) {
  return
}
if (message.split("/task_")[1]) {
  GetTask(message)
  return
}

