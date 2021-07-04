export const findMaxConsecutiveOnes1 = (nums: number[]): number => {
    const str: string = nums.reduce((acc, current) => `${acc}${current}`, '');
    const spittedArray: string[] = str.split('0').filter((item: string) => item);
    const sortedArray = spittedArray.sort((a: string, b: string) => b.length - a.length);

    return sortedArray.length > 0 ? sortedArray[0].length : 0;
};

export const findMaxConsecutiveOnes2 = (nums: number[]): number => {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            // Increment the count of 1's by one.
            count += 1;
        } else {
            // Find the maximum till now.
            maxCount = Math.max(maxCount, count);
            // Reset count of 1.
            count = 0;
        }
    }
    return Math.max(maxCount, count);
};
