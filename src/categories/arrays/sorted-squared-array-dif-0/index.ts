export const getSortedSquaredArraySolution1 = (array: number[]): number[] => {
    return array
        .map((item) => Math.pow(item, 2))
        .sort((a, b) => a - b);
};

export const getSortedSquaredArraySolution2 = (array: number[]): number[] => {
    const arrayLength = array.length;
    const result = new Array(arrayLength).fill(0);
    let leftPointer = 0;
    let rightPointer = arrayLength - 1;
	
		for(let i = arrayLength - 1; i >= 0; i--) {
			const leftValue = array[leftPointer];
			const rightValue = array[rightPointer];
			if(Math.abs(leftValue) < Math.abs(rightValue)) {
				result[i] = Math.pow(rightValue, 2);
				rightPointer--;
			} else {
				result[i] = Math.pow(leftValue, 2);
				leftPointer++;
			}
		}

    return result;
};