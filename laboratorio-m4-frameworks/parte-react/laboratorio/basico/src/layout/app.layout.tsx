import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="layout-app-container">{children}</div>;
};
