import React, { PropsWithChildren } from "react";
import { InputContext } from "./user-filter.context";

interface User {
  id: number;
  name: string;
  username: string;
}

interface UserModelContext {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const UserContext = React.createContext<UserModelContext>(undefined);

export const MembersProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [users, setUsers] = React.useState<User[]>([]);
  const { inputValue } = React.useContext(InputContext);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
      .then((response) => response.json())
      .then((usersJson) => setUsers(usersJson));
  }, [inputValue]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
