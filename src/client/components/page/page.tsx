import React, { ReactNode } from "react";
import { MainContainer } from "uikit";

import { PageContent } from "./page-content";
import { Routes } from "../../config/routes";

export const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <MainContainer>
      <PageContent routes={Routes} />
      {children}
    </MainContainer>
  );
};
