interface ChatMessage {
  id: number; // Primary key
  chat_id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  prev_message_id: number;
  sent_timestamp: Date;
  inserted_timestamp: Date;
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
  x_followers: number | null;
  github_commits: number | null;
  created_at: string;
  user_id: number;
}
