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

import * as S from "./styles";

type HeaderProps = {
  post: Omit<PostType, "id" | "content">;
};

export const Header = ({ post }: HeaderProps): ReactElement => {
  const { title, author, createdAt, commentsAmount, link } = post;

  return (
    <S.Container>
      <S.Heading>
        <Link to="/">
          <FaLessThan /> Back
        </Link>
        <a href={link}>
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
          {createdAt}
        </span>
        <span>
          <FaComment />
          {commentsAmount} comments
        </span>
      </S.Metadata>
    </S.Container>
  );
};
