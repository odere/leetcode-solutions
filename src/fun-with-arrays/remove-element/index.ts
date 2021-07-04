export const removeElement = (nums: number[], val: number): number => {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element === val) {
            nums.splice(index, 1);
            index--;
        }
    }

    return nums.length;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
