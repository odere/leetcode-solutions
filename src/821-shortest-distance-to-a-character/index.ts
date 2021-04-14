export function shortestToChar(s: string, c: string): number[] {
  const result = Array(s.length).fill(s.length);
  let charIndexes = [];

  for (let i = 0; i <= s.length; i++) {
    if (c === s[i]) {
      charIndexes.push(i);
    }
  }

  for (let i = 0; i <= charIndexes.length; i++) {
    for (let j = i; j <= s.length; j++) {
      if (Math.abs(j - charIndexes[i]) < result[j]) {
        result[j] = Math.abs(j - charIndexes[i]);
      }
    }
  }
  return result;
}
