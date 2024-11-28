interface ChatMessage {
  id: number; // Primary key
  chatId: string;
  senderId: number;
  receiverId: number;
  message: string;
  sentTimestamp: Date;
  createdAt: Date;
}

interface Gig {
  id: number; // Primary key
  client_id: number;
  freelancer_id: number;
  description: string;
  chat_id: number;
}

interface User {
  address: string;
  username: string | null;
  role: string | null;
  xFollowers: number | null;
  githubCommits: number | null;
  createdAt: Date;
  userId: number;
}
