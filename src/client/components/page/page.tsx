import React, { ReactNode } from "react";
import { Container } from "uikit";

import { PageContent } from "./page-content";
import { Routes } from "../../config/routes";

export const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <Container>
      <PageContent routes={Routes} />
      {children}
    </Container>
  );
};
