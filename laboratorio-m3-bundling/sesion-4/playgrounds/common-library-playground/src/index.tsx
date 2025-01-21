// import { mapCollection } from "@lrm/common-library";

// const collection = [1, 2, 3, 4, 5];
// const mappedCollection = mapCollection(collection, (item) => item * 2);
// console.log(mappedCollection); // [2, 4, 6, 8, 10]

import { Button } from "@lrm/common-library";
import "@lrm/common-library/styles.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<Button />);
