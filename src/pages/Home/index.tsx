import { ReactElement } from "react";

import { UserInformation } from "pages/Home/components";

import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <div>
      <UserInformation />

      <S.MainContent>
        <S.PostsHeading>
          <h3>Posts</h3>
          <span>6 posts</span>
        </S.PostsHeading>
        <input type="text" placeholder="Search content" />
      </S.MainContent>
    </div>
  );
};
