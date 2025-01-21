import React from "react";
import { getTotalScores } from "./average-service";
// import imgRio from "./content/rio.png";
import * as classes from "./total-score-component-styles.scss";

export const TotalScoreComponent: React.FC = () => {
  const [totalScore, setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setTotalScore(getTotalScores(scores));
  }, []);

  return (
    <div>
      {/* <img src={imgRio} alt="Rio" style={{width: 150}}/> */}
      <span className={classes.resultBackground}>
        Students total score is: {totalScore}
      </span>
    </div>
  );
};
