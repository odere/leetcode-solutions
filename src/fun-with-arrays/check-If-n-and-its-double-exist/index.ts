export const checkIfExist = (arr: number[]): boolean => {
    const hashMap: Set<number> = new Set();

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (hashMap.has(element * 2) || hashMap.has(element / 2)) {
            return true;
        } else {
            hashMap.add(element);
        }
    }

    return false;
};

console.log(checkIfExist([10, 2, 5, 3]));

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));

console.log(checkIfExist([0, 0]));

console.log(checkIfExist([7, 1, 11]));
