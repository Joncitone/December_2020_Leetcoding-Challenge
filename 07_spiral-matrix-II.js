var generateMatrix = function (n) {
  let mat = Array(n)
    .fill(0)
    .map((i) => Array(n).fill(0));
  let dir = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ]; //The directions in order, right, down, left, up
  let i = 0,
    j = -1,
    num = 1;

  for (let x = 0; num <= n * n; x++) {
    x = x % 4;
    (i += dir[x][0]), (j += dir[x][1]);
    while (i >= 0 && j >= 0 && i < n && j < n && mat[i][j] == 0) {
      mat[i][j] = num++;
      (i += dir[x][0]), (j += dir[x][1]);
    }
    (i -= dir[x][0]), (j -= dir[x][1]);
  }
  return mat;
};
