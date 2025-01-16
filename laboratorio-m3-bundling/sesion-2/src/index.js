import { getAverage } from "./average-service.js";
import imgRio from "./content/rio.png";
import "./mystyles.scss";

const average = getAverage([1, 2, 3, 4, 5]);
const message2 = `El promedio es: ${average}`;
document.write(message2);

const img = document.createElement("img");
img.src = imgRio;

document.getElementById("imgContainer").appendChild(img);
