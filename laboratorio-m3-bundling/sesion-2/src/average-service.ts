export function getAverage(scores: number[]): number {
  return getTotalScores(scores) / scores.length;
}

export function getTotalScores(scores: number[]): number {
  return scores.reduce((score, count) => score + count, 0);
}

export default getAverage;
