import React, { PropsWithChildren } from "react";

export const UserContext = React.createContext(undefined);

export const UserProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [user, setUser] = React.useState({ name: "John" });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
