import React from "react";
import * as classes from "./average-component-styles.scss";
import { getAverage } from "./average-service";

export const AverageComponent: React.FC = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setAverage(getAverage(scores));
  }, []);

  return (
    <div>
      <span className={classes.resultBackground}>
        The average is: {average}
      </span>
    </div>
  );
};
