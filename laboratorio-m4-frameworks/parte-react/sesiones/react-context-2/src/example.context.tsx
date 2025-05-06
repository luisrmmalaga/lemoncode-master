import React, { PropsWithChildren } from "react";

interface ContextModel {
  value: string;
}

export const Context = React.createContext<ContextModel>(undefined);

export const ContextProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Context.Provider value={{ value: "example" }}>{children}</Context.Provider>
  );
};
