import React, { ReactNode } from "react";

import { PageContent } from "./page-content";
import { Routes } from "client/config/routes";

export const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <PageContent routes={Routes} />
      {children}
    </div>
  );
};
