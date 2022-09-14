import { REPO_NAME } from "constants";

import { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { api } from "services/api";
import { Post as PostType } from "types";

import { Header } from "./components";
import * as S from "./styles";

export const Post = (): ReactElement | null => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType>();

  const fetchIssue = async (id: string) => {
    const response = await api.get(`repos/${REPO_NAME}/issues/${id}`);

    const formattedPost: PostType = {
      id,
      title: response.data.title,
      content: response.data.body,
      createdAt: response.data.created_at,
      author: {
        username: response.data.user.login,
      },
      commentsAmount: response.data.comments,
    };

    setPost(formattedPost);
  };

  useEffect(() => {
    fetchIssue(id ?? "");
  }, [id]);

  if (!post) return null;

  return (
    <S.Container>
      <Header
        post={{
          id: post.id,
          author: post.author,
          commentsAmount: post.commentsAmount,
          createdAt: post.createdAt,
          title: post.title,
        }}
      />

      <S.Content>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </S.Content>
    </S.Container>
  );
};
