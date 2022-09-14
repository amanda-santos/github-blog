import { ReactElement } from "react";

import { Post as PostType } from "types";

import { Header } from "./components";
import * as S from "./styles";

export const Post = (): ReactElement => {
  const post: Omit<PostType, "id" | "content"> = {
    title: "JavaScript data types and data structures",
    author: {
      username: "cameronwll",
    },
    createdAt: "2021-03-01",
    commentsAmount: 32,
    link: "github.com/cameronwll",
  };

  return (
    <S.Container>
      <Header post={post} />

      <S.Content>
        <p>
          <b>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </b>{" "}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.{" "}
        </p>

        <h4>Dynamic typing</h4>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </S.Content>
    </S.Container>
  );
};
