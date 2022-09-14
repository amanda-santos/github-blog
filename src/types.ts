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
