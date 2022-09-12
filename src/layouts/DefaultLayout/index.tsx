import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components";
import * as S from "layouts/DefaultLayout/styles";

export const DefaultLayout = (): ReactElement => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.LayoutContainer>
  );
};
