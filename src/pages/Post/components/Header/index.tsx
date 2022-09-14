import { REPO_NAME } from "constants";

import { ReactElement } from "react";
import {
  FaCalendarDay,
  FaComment,
  FaGithub,
  FaLessThan,
  FaShareSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Post as PostType } from "types";
import { formatDateToNow } from "utils/formatDateToNow";

import * as S from "./styles";

type HeaderProps = {
  post: Omit<PostType, "content">;
};

export const Header = ({ post }: HeaderProps): ReactElement => {
  const { id, title, author, createdAt, commentsAmount } = post;

  return (
    <S.Container>
      <S.Heading>
        <Link to="/">
          <FaLessThan /> Back
        </Link>
        <a
          href={`https://github.com/${REPO_NAME}/issues/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          See on Github <FaShareSquare size={12} />
        </a>
      </S.Heading>

      <h1>{title}</h1>

      <S.Metadata>
        <span>
          <FaGithub size={16} /> {author.username}
        </span>
        <span>
          <FaCalendarDay />
          {formatDateToNow(new Date(createdAt))}
        </span>
        <span>
          <FaComment />
          {commentsAmount} comments
        </span>
      </S.Metadata>
    </S.Container>
  );
};
