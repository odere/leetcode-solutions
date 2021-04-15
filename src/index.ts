import { shortestToChar } from './821-shortest-distance-to-a-character';
import {
  twoNumberSumSolution1,
  twoNumberSumSolution2,
  twoNumberSumSolution3
} from './categories/arrays/two-numbers-sum-dif-0';

console.group('shortestToChar');
console.log(shortestToChar('loveleetcode', 'e'));
console.groupEnd();

console.group('twoNumberSum');
console.log(twoNumberSumSolution1([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSumSolution2([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSumSolution3([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.groupEnd();
