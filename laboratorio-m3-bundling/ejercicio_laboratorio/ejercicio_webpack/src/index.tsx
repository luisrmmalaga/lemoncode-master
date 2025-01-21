import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./content/logo.png";
import * as classes from "./mystyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className={classes.container}>
    <h1 className={classes.hello}>Hola mundo!!</h1>
    <img src={logo} alt="Logo" style={{ width: 150 }} />
  </div>
);
