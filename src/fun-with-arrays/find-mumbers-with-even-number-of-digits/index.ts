export const findNumbers = (nums: number[]): number => {
    let evenNumbers = 0;

    for (let index = 0; index < nums.length; index++) {
        const strElement = nums[index].toString();
        const isEven = strElement.length % 2 === 0;

        if (isEven) {
            evenNumbers += 1;
        }
    }

    return evenNumbers;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]))