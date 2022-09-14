import { ReactElement, useEffect, useState } from "react";

import { PostPreview, UserInformation } from "pages/Home/components";
import { api } from "services/api";
import { Post } from "types";

import * as S from "./styles";

type IssueType = {
  number: number;
  title: string;
  body: string;
  created_at: string;
};

export const Home = (): ReactElement => {
  const searchValue = "";
  const REPO_NAME = "amanda-santos/github-blog";

  const [posts, setPosts] = useState<Omit<Post, "author" | "commentsAmount">[]>(
    []
  );

  const fetchIssues = async () => {
    const response = await api.get("search/issues", {
      params: {
        q: `${searchValue} repo:${REPO_NAME}`,
      },
    });

    const formattedPosts = response.data.items.map((issue: IssueType) => ({
      id: issue.number,
      title: issue.title,
      content: issue.body,
      createdAt: issue.created_at,
    }));

    setPosts(formattedPosts);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <UserInformation />

      <S.MainContent>
        <S.PostsHeading>
          <h3>Posts</h3>
          <span>6 posts</span>
        </S.PostsHeading>
        <input type="text" placeholder="Search content" />

        <S.Posts>
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </S.Posts>
      </S.MainContent>
    </div>
  );
};
