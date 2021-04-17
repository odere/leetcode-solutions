import { isValidSubsequenceSolution1, isValidSubsequenceSolution2 } from './index';

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
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 22, 6, -1, 8, 10],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -1],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -1, 10],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, -2],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [26],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 25, 22, 6, -1, 8, 10],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 26, 22, 8],
        expectedResult: false,
    },
    {
        array: [1, 1, 6, 1],
        sequence: [1, 1, 1, 6],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [1, 6, -1, 10, 11, 11, 11, 11],
        expectedResult: false,
    },
    {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
        expectedResult: false,
    },
];

describe('twoNumberSum:', () => {
    describe('Solution 1 - O(n) time | O(n) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, sequence, expectedResult } = testCase;

            it(`Test case ${index+1} - [${array.join(', ')}], sequence - [${sequence.join(', ')}]`, () => {
                expect(isValidSubsequenceSolution1(array, sequence)).toEqual(expectedResult);
            });
        });
    });

    describe('Solution 2 - O(n) time | O(1) space:', () => {
        testCases.forEach((testCase, index) => {
            const { array, sequence, expectedResult } = testCase;

            it(`Test case ${index+1} - [${array.join(', ')}], sequence - [${sequence.join(', ')}]`, () => {
                expect(isValidSubsequenceSolution2(array, sequence)).toEqual(expectedResult);
            });
        });
    });
});
