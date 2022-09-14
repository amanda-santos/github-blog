import { ReactElement, useEffect, useState } from "react";
import {
  FaBuilding,
  FaGithub,
  FaShareSquare,
  FaUserFriends,
} from "react-icons/fa";

import { api } from "services/api";
import { User } from "types";

import * as S from "./styles";

export const UserInformation = (): ReactElement | null => {
  const [user, setUser] = useState<User | null>(null);
  const USERNAME = "amanda-santos";

  const fetchUser = async (username: string) => {
    const response = await api.get(`users/${username}`);
    const { data } = response;

    setUser({
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followersAmount: data.followers,
      name: data.name,
      username: data.login,
    });
  };

  useEffect(() => {
    fetchUser(USERNAME);
  }, []);

  if (!user) return null;

  return (
    <S.UserInformationContainer>
      <img src={user.avatarUrl} alt={user.name} />
      <S.RightSideContainer>
        <S.UserInformationTitle>
          <h1>{user.name}</h1>
          <a
            href={`https://github.com/${user.username}`}
            target="_blank"
            rel="noreferrer"
          >
            Github <FaShareSquare size={12} />
          </a>
        </S.UserInformationTitle>
        <p>{user.bio}</p>

        <S.Metadata>
          <span>
            <FaGithub size={16} /> {user.username}
          </span>
          <span>
            <FaBuilding size={16} /> {user.company}
          </span>
          <span>
            <FaUserFriends size={16} /> {user.followersAmount} followers
          </span>
        </S.Metadata>
      </S.RightSideContainer>
    </S.UserInformationContainer>
  );
};
