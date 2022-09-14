import { REPO_NAME } from "constants";

import { zodResolver } from "@hookform/resolvers/zod";
import debounce from "debounce";
import { FormEvent, ReactElement, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";

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

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export const Home = (): ReactElement => {
  const [posts, setPosts] = useState<Omit<Post, "author" | "commentsAmount">[]>(
    []
  );

  const { control, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });
  const query = watch("query");

  const fetchIssues = async (query: string) => {
    const response = await api.get("search/issues", {
      params: {
        q: `${query} repo:${REPO_NAME}`,
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
    fetchIssues(query);
  }, [query]);

  return (
    <div>
      <UserInformation />

      <S.MainContent>
        <S.PostsHeading>
          <h3>Posts</h3>
          <span>{posts.length} posts</span>
        </S.PostsHeading>

        <Controller
          control={control}
          name="query"
          render={({ field }) => (
            <input
              type="text"
              onChange={debounce(
                (event: FormEvent) => field.onChange(event),
                500
              )}
              defaultValue={field.value}
            />
          )}
        />

        <S.Posts>
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </S.Posts>
      </S.MainContent>
    </div>
  );
};
