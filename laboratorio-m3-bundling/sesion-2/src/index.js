import { getAverage } from "./average-service.js";
import "./mystyles.scss";
import imgRio from "./content/rio.png";

const average = getAverage([1, 2, 3, 4, 5]);
const message2 = `El promedio es: ${average}`;
document.write(message2);

const img = document.createElement("img");
img.src = imgRio;

document.getElementById("imgContainer").appendChild(img);