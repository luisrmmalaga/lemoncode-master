import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useUsersList = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [filterDebounced] = useDebounce(filter, 1000);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${filterDebounced}`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [filterDebounced]);

  return { filter, setFilter, users };
};
