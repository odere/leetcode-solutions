/**
 * Do not return anything, modify arr in-place instead.
 */
export const duplicateZeros = (arr: number[]): void => {
    const copy = [...arr];
    let indexOriginal = 0;
    let indexCopy = 0;

    // helper
    const replaceElement = (value) => {
        arr[indexOriginal] = value;
        indexOriginal += 1;
    }

    do {
        const element = copy[indexCopy];
        const toShift = element === 0 && indexOriginal <= arr.length - 2;

        replaceElement(element);

        if (toShift) {
            replaceElement(0);
        }

        indexCopy += 1;
    } while (arr.length > indexOriginal);
};

const arr1 = [1,0,2,3,0,4,5,0];
duplicateZeros(arr1);
console.log(arr1);


const arr2 = [0,0,0,0,0,0,0];
duplicateZeros(arr2);
console.log(arr2);