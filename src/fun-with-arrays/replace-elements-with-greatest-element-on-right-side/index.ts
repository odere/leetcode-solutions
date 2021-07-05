export const replaceElements = (arr: number[]): number[] => {
    const length = arr.length;

    for (let index = 0; index < length; index++) {
        if (index === length - 1) {
            arr[index] = -1;
        } else {
            arr[index] = Math.max(...arr.slice(index + 1, length))
        }
    }

    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));

console.log(replaceElements([400]));