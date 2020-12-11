var removeDuplicates = function (nums) {
  if (nums.length < 3) return;
  let i = 2;
  while (nums[i] !== undefined) {
    if (nums[i] === nums[i - 2]) {
      let cur = i;
      while (nums[i] === nums[++i]) {}
      nums.splice(cur, i - cur);
      i = cur;
    } else {
      i++;
    }
  }
  return;
};

//This problem allowed no more than pairs, hence the gaps of 2 above
