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

interface GigOffer {
  offerId: number;
  createdAt: Date;
  gigId: number;
  status: string;
  comment: string;
  freelancerId: number;
  chatId: string;
  updatedAt: Date;
  chatUuid: string;
  clientId: number;
}

interface AuthObject {
  userId: number;
  role: string;
  updateLoggedInUser: (userId: number, role: string) => void;
  resetLoggedInUser: () => void;
}
