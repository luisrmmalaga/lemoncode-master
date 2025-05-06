import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login";
import { Detail } from "./detail";
import { List } from "./list";

export const App = () => {
  return (
    <>
      <h1>Hello World!!</h1>
      <AppRouter />
    </>
  );
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path={"/list"} element={<List />}></Route>
        <Route path={"/detail"} element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
