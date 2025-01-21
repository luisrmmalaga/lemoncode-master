import { getAverage } from "./average-service.js";
import "./mystyles.css";

const average = getAverage([1, 2, 3, 4, 5]);
const message2 = `El promedio es: ${average}`;
document.write(message2);