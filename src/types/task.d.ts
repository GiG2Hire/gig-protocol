interface GigTask {
  taskId?: int;
  gigId?: int;
  description: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface JWTContext {
  userId: number;
  role: string;
}
