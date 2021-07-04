export const sortedSquares = (nums: number[]): number[] => {
    return nums
        .map((item) => Math.pow(item, 2))
        .sort((a, b) => a - b);
};
