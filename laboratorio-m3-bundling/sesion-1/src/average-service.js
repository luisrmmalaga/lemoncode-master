export function getAverage(scores) {
  return getTotalScores(scores) / scores.length;
}

function getTotalScores(scores) {
  return  scores.reduce((score, count) => score + count, 0);
}