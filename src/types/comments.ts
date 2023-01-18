export interface Comment {
  id: number;
  user: {
    id: number;
    name: string;
    userName: string;
    avatar: string;
  };
  timestamp: string;
  comments: string;
  score: number;
}
