import { FC } from "react";

export const HelloComponent: FC = () => {
  return (
    <>
      <h2>Hello from React</h2>
      <p>Api server is {import.meta.env.VITE_API_BASE}</p>
    </>
  );
};
