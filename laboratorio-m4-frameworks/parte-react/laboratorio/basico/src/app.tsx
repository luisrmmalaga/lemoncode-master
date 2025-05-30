import React from "react";
import { AppRouter } from "@/router";
import { OrganisationProvider } from "./core/providers";

export const App = () => {
  return (
    <OrganisationProvider>
      <AppRouter />
    </OrganisationProvider>
  );
};
