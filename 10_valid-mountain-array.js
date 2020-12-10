var validMountainArray = function (arr) {
  if (arr.length <= 2) return false;
  if (arr[0] > arr[1] || arr[arr.length - 2] < arr[arr.length - 1])
    return false;

  let currentSide = 'left';
  let switchCount = 0;

  function compare(elem1, elem2) {
    switch (currentSide) {
      case 'left':
        return elem1 < elem2;
      case 'right':
        return elem1 > elem2;
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && switchCount === 0) {
      currentSide = 'right';
      switchCount++;
    }
    if (!compare(arr[i], arr[i + 1])) {
      return false;
    }
  }
  return true;
};
