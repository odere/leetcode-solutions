import shortestToChar from './index';

describe('821-shortest-distance-to-a-character test utils:', () => {
  describe('shortestToChar:', () => {
    it('should return shortest path to the right with one entry', () => {
      const result = shortestToChar('abcde', 'a');
      const expectedResult = [0, 1, 2, 3, 4];

      expect(result).toEqual(expectedResult);
    });

    it('should return shortest path to the left with one entry', () => {
      const result = shortestToChar('abcde', 'e');
      const expectedResult = [4, 3, 2, 1, 0];

      expect(result).toEqual(expectedResult);
    });

    it('should return shortest path with one entry', () => {
      const result = shortestToChar('abcde', 'b');
      const expectedResult = [1, 0, 1, 2, 3];

      expect(result).toEqual(expectedResult);
    });

    it('should return shortest path loveleetcode', () => {
      const result = shortestToChar('loveleetcode', 'e');
      const expectedResult = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];

      expect(result).toEqual(expectedResult);
    });

    it('should return shortest path abbaa', () => {
      const result = shortestToChar('abbaa', 'b');
      const expectedResult = [1, 0, 0, 1, 2];

      expect(result).toEqual(expectedResult);
    });
  });
});
