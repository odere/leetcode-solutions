export const removeDuplicates = (nums: number[]): number => {
    const hashMap: { [key: number]: boolean } = {};

    // helper
    const addKey = (key: number): boolean  => {
        const value = hashMap[key];
        if (!value) {
            hashMap[key] = true;
        }

        return Boolean(value);
    }

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const isDuplicate = addKey(element)
        if (isDuplicate) {
            nums.splice(index, 1);
            index--;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
