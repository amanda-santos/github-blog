import { ReactElement } from "react";

import logoImg from "assets/logo.svg";

import * as S from "./styles";

export const Header = (): ReactElement => {
  return (
    <S.HeaderContainer>
      <img src={logoImg} alt="" />
    </S.HeaderContainer>
  );
};
