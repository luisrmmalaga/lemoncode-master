import React from "react";
import { Context, ContextProvider } from "./example.context";

export const App = () => {
  return (
    <ContextProvider>
      <Children></Children>
    </ContextProvider>
  );
};

const Children = () => {
  const { value } = React.useContext(Context);

  return <h1>I use the context!! Example value: {value}</h1>;
};
