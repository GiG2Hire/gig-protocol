export function prepareConversation(messages, senderIsFreelancer): string {
  let conversation: string = "";
  messages.map((message) => {
    if (message.sender_id == 1) {
      conversation = conversation + "Freelancer: " + message.message + "\n";
    } else {
      conversation = conversation + "Client: " + message.message + "\n";
    }
  });
  return conversation;
}
