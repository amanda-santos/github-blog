import { ReactElement } from "react";

import logoImg from "assets/logo.svg";

import { HeaderContainer } from "./styles";

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  );
};
