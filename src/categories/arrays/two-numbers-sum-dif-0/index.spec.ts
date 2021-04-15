import { twoNumberSumSolution1, twoNumberSumSolution2, twoNumberSumSolution3 } from './index';

const testCases = [
    {
        array: [3, 5, -4, 8, 11, 1, -1, 6],
        targetSum: 10,
        expectedResult: [-1, 11],
    },
    {
        array: [4, 6],
        targetSum: 10,
        expectedResult: [4, 6],
    },
    {
        array: [4, 6, 1],
        targetSum: 5,
        expectedResult: [1, 4],
    },
    {
        array: [4, 6, 1, -3],
        targetSum: 3,
        expectedResult: [-3, 6],
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        targetSum: 17,
        expectedResult: [8, 9],
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
        targetSum: 18,
        expectedResult: [3, 15],
    },
    {
        array: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
        targetSum: -5,
        expectedResult: [-5, 0],
    },
    {
        array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        targetSum: 163,
        expectedResult: [-47, 210],
    },
    {
        array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        targetSum: 164,
        expectedResult: [],
    },
    {
        array: [3, 5, -4, 8, 11, 1, -1, 6],
        targetSum: 15,
        expectedResult: [],
    },
    {
        array: [14],
        targetSum: 15,
        expectedResult: [],
    },
    {
        array: [15],
        targetSum: 15,
        expectedResult: [],
    },
];

describe('twoNumberSum:', () => {
    describe('Solution 1 - O(n^2) time | O(1) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, targetSum, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${targetSum}`, () => {
                expect(twoNumberSumSolution1(array, targetSum).sort((a, b) => a - b)).toEqual(expectedResult);
            });
        });
    });

    describe('Solution 2 - O(n) time | O(n) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, targetSum, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${targetSum}`, () => {
                expect(twoNumberSumSolution2(array, targetSum).sort((a, b) => a - b)).toEqual(expectedResult);
            });
        });
    });

    describe('Solution 3 - // O(nlog(n)) time | O(1) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, targetSum, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${targetSum}`, () => {
                expect(twoNumberSumSolution3(array, targetSum).sort((a, b) => a - b)).toEqual(expectedResult);
            });
        });
    });
});
