import { ReactElement } from "react";
import {
  FaBuilding,
  FaGithub,
  FaShareSquare,
  FaUserFriends,
} from "react-icons/fa";

import avatarImg from "assets/avatar.svg";

import * as S from "./styles";

export const UserInformation = (): ReactElement => {
  return (
    <S.UserInformationContainer>
      <img src={avatarImg} alt="Cameron Williamson" />

      <div>
        <S.UserInformationTitle>
          <h1>Cameron Williamson</h1>
          <a href="">
            Github <FaShareSquare size={12} />
          </a>
        </S.UserInformationTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <S.Metadata>
          <span>
            <FaGithub size={16} /> cameronwll
          </span>
          <span>
            <FaBuilding size={16} /> Rocketseat
          </span>
          <span>
            <FaUserFriends size={16} /> 32 seguidores
          </span>
        </S.Metadata>
      </div>
    </S.UserInformationContainer>
  );
};
