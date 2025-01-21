// import "bootstrap/dist/css/bootstrap.css";
// import rio from "./content/rio.png";
// import "./mystyles.scss";

// const user = "John";

// console.log(`Hello, ${user}!`);
// console.log("this app is using Vite!!");

// const img = document.createElement("img");
// img.src = rio;
// document.getElementById("imgContainer").appendChild(img);


// const numberA: number = 2;
// const numberB: number = 3;

// console.log(`The sum of ${numberA} and ${numberB} is ${numberA + numberB}`);

import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const root = createRoot(document.getElementById("root"));

root.render(<HelloComponent/>);