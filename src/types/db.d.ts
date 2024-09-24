interface ChatMessage {
  id: number; // Primary key
  chatId: string;
  senderId: number;
  receiverId: number;
  message: string;
  sentTimestamp: Date;
}

interface Gig {
  id: number; // Primary key
  clientId: number;
  freelancerId: number[];
  freelancerCount: number; // starting from 0
  title: string;
  description: string;
  budget: number;
  paymentId: BigInt; // Id from Smart Contract
  deadlinePeriod: Date;
  timeCreation: Date;
  tasks: string[];
  jobCategory: string;
  chatId: number;
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
