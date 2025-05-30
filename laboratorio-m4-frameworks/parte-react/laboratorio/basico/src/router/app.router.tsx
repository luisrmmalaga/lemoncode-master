import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import { DetailScene, ListScene } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />}></Route>
      </Routes>
    </Router>
  );
};
