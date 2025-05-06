import React from "react";
import { ListPage } from "@/scenes";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { switchRoutes } from "./routes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.list} />}
        />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<h1>Detail</h1>}></Route>
      </Routes>
    </Router>
  );
};
