import React from "react";
import { generatePath, useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const [user, setUser] = React.useState<User>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeUser =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  const handleNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "test") {
      navigate(generatePath("/list"));
      return;
    }

    alert("Wrong credentials! Try again");
  };

  return (
    <form onSubmit={handleNavigate}>
      <h2>Welcome to Login!!</h2>
      <br />
      Username
      <div>
        <input
          type="text"
          value={user.username}
          onChange={handleChangeUser("username")}
        />
      </div>
      Password
      <div>
        <input
          type="text"
          value={user.password}
          onChange={handleChangeUser("password")}
        />
      </div>
      <br />
      <button type="submit">Navigate</button>
    </form>
  );
};
