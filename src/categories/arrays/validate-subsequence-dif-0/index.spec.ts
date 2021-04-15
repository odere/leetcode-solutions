import { isValidSubsequenceSolution1, isValidSubsequenceSolution2, isValidSubsequenceSolution3 } from './index';

const testCases = [
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 25, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [22, 25, 6],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [25],
        expectedResult: true,
    },
    {
        array: [1, 1, 1, 1, 1],
        sequence: [1, 1, 1],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 22, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -1],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -1, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -2],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [26],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 25, 22, 6, -1, 8, 10],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 26, 22, 8],
        expectedResult: true,
    },
    {
        array: [1, 1, 6, 1],
        sequence: [1, 1, 1, 6],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, 10, 11, 11, 11, 11],
        expectedResult: true,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
        expectedResult: true,
    },
];

describe('twoNumberSum:', () => {
    describe('Solution 1 - O(n^2) time | O(1) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, sequence, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${sequence}`, () => {
                expect(isValidSubsequenceSolution1(array, sequence)).toEqual(expectedResult);
            });
        });
    });

    describe('Solution 2 - O(n) time | O(n) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, sequence, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${sequence}`, () => {
                expect(isValidSubsequenceSolution2(array, sequence)).toEqual(expectedResult);
            });
        });
    });

    describe('Solution 3 - // O(nlog(n)) time | O(1) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, sequence, expectedResult } = testCase;

            it(`Test case ${index} - [${array.join(', ')}], target sum - ${sequence}`, () => {
                expect(isValidSubsequenceSolution3(array, sequence)).toEqual(expectedResult);
            });
        });
    });
});
