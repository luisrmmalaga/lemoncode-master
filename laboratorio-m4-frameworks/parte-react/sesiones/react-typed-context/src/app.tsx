import React from "react";
import { MembersProvider, UserContext } from "./members.context";
import { InputContext, InputProvider } from "./user-filter.context";

export const App: React.FC = () => {
  return (
    <InputProvider>
      <Input />
      <MembersProvider>
        <UserList />
      </MembersProvider>
    </InputProvider>
  );
};

const UserList: React.FC = () => {
  const { users } = React.useContext(UserContext);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const Input: React.FC = () => {
  const { inputValue, setInputValue } = React.useContext(InputContext);
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
