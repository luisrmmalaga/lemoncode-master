import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  detail: string;
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  detail: "/detail/:login",
};

export const routes: Routes = {
  root: "/",
  detail: (login: string) => generatePath("detail/:login", { login }),
};
