module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return [];
  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i].reverse();
  }
  return matrix.reduce((acc, val) => acc.concat(val), []);
}
