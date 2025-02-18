import React from "react";
import { UserContext, UserProvider } from "./user.provider";

export const App = () => {
  return (
    <UserProvider>
      <h1>Hello World!!</h1>
      <ChildComponent />
    </UserProvider>
  );
};

const ChildComponent = () => {
  return (
    <>
      <h2>Hello child!!</h2>
      <GrandChildComponent />
    </>
  );
};

const GrandChildComponent = () => {
  const { user } = React.useContext(UserContext);
  return <h3>Hello grand child!! My name {user.name}</h3>;
};
