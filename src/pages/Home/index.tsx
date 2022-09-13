import { ReactElement } from "react";

import { PostPreview, UserInformation } from "pages/Home/components";

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

        <S.Posts>
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </S.Posts>
      </S.MainContent>
    </div>
  );
};
