const findPrefixCommonArray: (A: number[], B: number[]) => number[] = (
  A: number[],
  B: number[]
) => {
  const n: number = A.length;
  const prefixCommonArray: number[] = [];

  if (A.length !== B.length) return []; // length of both should be same

  for (let i: number = 0; i < n; i++) {
    let commonCount: number = 0,
      start: number = 0;

    while (start <= i) {
      for (let j = 0; j <= i; j++) {
        if (A[start] === B[j]) {
          commonCount++;
          break;
        }
      }
      start++;
    }
    prefixCommonArray.push(commonCount);
  }
  return prefixCommonArray;
};

// const A: number[] = [1, 3, 2, 4];
// const B: number[] = [3, 1, 2, 4];
const A: number[] = [2, 3, 1];
const B: number[] = [3, 1, 2];

console.log(findPrefixCommonArray(A, B))

