export type Post = {
  id: string;
  title: string;
  content: string;
  author: {
    username: string;
  };
  createdAt: string;
  commentsAmount: number;
  link: string;
};

export type User = {
  avatarUrl: string;
  username: string;
  name: string;
  bio: string;
  followersAmount: number;
  company: string;
}