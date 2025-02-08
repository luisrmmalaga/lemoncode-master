import React from "react";
import { useUsersList } from "./use-users-list";

export const App = () => {
  const { filter, setFilter, users } = useUsersList();

  return (
    <>
      <input
        value={filter}
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
