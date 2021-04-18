export const isValidSubsequenceSolution1 = (array: number[], sequence: number[]): boolean => {
    let arrayIndex = 0;
    let sequenceIndex = 0;
    const sequenceLength = sequence.length;
    while (arrayIndex < array.length && sequenceIndex < sequence.length) {
        if (array[arrayIndex] === sequence[sequenceIndex]) {
            sequenceIndex++;
        }
        if (sequenceIndex > sequenceLength) {
            return false;
        }
        arrayIndex++;
    }
    return sequenceIndex === sequenceLength;
};

export const isValidSubsequenceSolution2 = (array: number[], sequence: number[]): boolean => {
    let sequenceIndex = 0;
    const sequenceLength = sequence.length;
    for (const num of array) {
        if (num === sequence[sequenceIndex]) {
            sequenceIndex++;
        }
        if (sequenceIndex > sequenceLength) {
            return false;
        }
    }
    return sequenceIndex === sequenceLength;
};
