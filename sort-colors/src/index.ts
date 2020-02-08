export const sortColors = (nums: number[]): number[] => {
  if (!nums) return [];
  if (nums.length === 1) return nums;

  const counter: number[] = [0, 0];
  for (let i = 0; i < nums.length; i = i + 1) {
    if (counter[nums[i]] !== undefined) {
      counter[nums[i]] = counter[nums[i]] + 1;
    }
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i = i + 1) {
    if (counter[0] > 0) {
      counter[0] = counter[0] - 1;
      result[i] = 0;
    } else if (counter[1] > 0) {
      counter[1] = counter[1] - 1;
      result[i] = 1;
    } else {
      result[i] = 2;
    }
  }
  return result;
};

// alternate
export const sortColors2 = (nums: number[]): number[] => {
  if (!nums) return [];
  if (nums.length === 1) return nums;

  const counter: number[] = [0, 0, 0];
  const n = nums.length;

  let current: number;
  let i: number;
  while (counter[0] + counter[2] < n) {
    i = counter[0];
    current = nums[i];
    if (current === 2) {
      nums[i] = nums[(n - 1) - counter[2]];
      nums[(n - 1) - counter[2]] = 2;
      counter[2] = counter[2] + 1;
    }

    if (nums[i] === 1) {
      counter[1] = counter[1] + 1;
      nums[i] = 0;
    }

    if (nums[i] === 0) {
      counter[0] = counter[0] + 1;
    }
  }

  // Filling the ones
  const i2 = n - counter[2] - 1;
  for (let i = 0; i < counter[1]; i = i + 1) {
    nums[i2 - i] = 1;
  }
  return nums;
};
