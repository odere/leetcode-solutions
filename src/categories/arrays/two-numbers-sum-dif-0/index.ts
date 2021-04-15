// O(n^2) time | O(1) space
export function twoNumberSumSolution1(array: number[], targetSum: number): number[] {
	for(let i = 0; i <= array.length; i++) {
		for(let j = i + 1; j <= array.length; j++) {
			const firstSum: number = array[i];
			const secondSum: number = array[j];
			const equalsSum: boolean = firstSum + secondSum === targetSum;
			if (equalsSum) {
				return [firstSum, secondSum];
			}
		}
	}
	return [];
}

// O(n) time | O(n) space
export function twoNumberSumSolution2(array: number[], targetSum: number): number[] {
	const numSet: Set<number> = new Set();
	for(const num of array) {
		const potentialMatch: number = targetSum - num;
		if (numSet.has(potentialMatch)) {
			return [num, potentialMatch];
		} else {
			numSet.add(num);
		}
	}
	return [];
}

// O(nlog(n)) time | O(1) space
export function twoNumberSumSolution3(array: number[], targetSum: number): number[] {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	array.sort((a, b) => a - b);
	while (leftPointer < rightPointer) {
		const firstNum: number = array[leftPointer];
		const secondNum: number = array[rightPointer];
		const currentSum: number = firstNum + secondNum;
		if (currentSum === targetSum) {
			return [firstNum, secondNum];
		}
		if(currentSum < targetSum) {
			leftPointer++;
		} else {
			rightPointer--;
		}
	}
	return [];
}
