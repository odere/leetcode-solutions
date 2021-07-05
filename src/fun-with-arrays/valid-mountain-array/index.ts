export const validMountainArray = (arr: number[]): boolean => {
    const length = arr.length;
    let peakReached = false;

    if (length < 3 || (!peakReached && arr[0] > arr[1])) {
        return false;
    }

    for (let index = 0; index < length - 1; index++) {
        const element = arr[index];
        const elementNext = arr[index + 1];

        if (element > elementNext) {
            peakReached = true;
        }

        if (peakReached) {
            if (element <= elementNext) {
                return false;
            }
        } else {
            if (element >= elementNext) {
                return false;
            }
        }
    }
    
    if (!peakReached) {
        return false;
    }

    return true;
};


console.log(validMountainArray([2, 1]));

console.log(validMountainArray([3, 5, 5]));

console.log(validMountainArray([0, 3, 2, 1]));

console.log(validMountainArray([0, 1, 2, 4, 2, 1]));

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));