import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Post } from "types";
import { formatDateToNow } from "utils/formatDateToNow";

import * as S from "./styles";

type PostPreviewProps = {
  post: Omit<Post, "author" | "commentsAmount">;
};

export const PostPreview = ({ post }: PostPreviewProps): ReactElement => {
  const { content, createdAt, id, title } = post;

  return (
    <S.Container>
      <S.Heading>
        <Link to={`post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <span>{formatDateToNow(new Date(createdAt))}</span>
      </S.Heading>

      <p>{content}</p>
    </S.Container>
  );
};
