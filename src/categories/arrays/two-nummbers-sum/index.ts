// O(n^2) time | O(1) space
export function twoNumberSum(array: number[], targetSum: number): number[] {
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
