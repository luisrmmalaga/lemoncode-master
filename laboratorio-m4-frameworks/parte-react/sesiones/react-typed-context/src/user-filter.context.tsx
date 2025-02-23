import React, { PropsWithChildren } from "react";

interface InputModelContext {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const InputContext = React.createContext<InputModelContext>(undefined);

export const InputProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
