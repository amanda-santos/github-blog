import { ReactElement } from "react";

import headerImg from "assets/header.svg";

import { HeaderContainer } from "./styles";

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="" />
    </HeaderContainer>
  );
};
