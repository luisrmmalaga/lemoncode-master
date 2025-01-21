import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./average-component";
// import "./mystyles.scss";
import { TotalScoreComponent } from "./total-score-component";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div>
    <h1>Hello from React!!</h1>
    <AverageComponent />
    <TotalScoreComponent />
  </div>
);
