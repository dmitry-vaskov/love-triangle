/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triangles = 0;
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[preferences[preferences[i] - 1] - 1] == i + 1)
      triangles++;
  }
  return parseInt(triangles / 3);
};
