"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortColors = function (nums) {
    if (!nums)
        return [];
    if (nums.length === 1)
        return nums;
    var counter = [0, 0];
    for (var i = 0; i < nums.length; i = i + 1) {
        if (counter[nums[i]] !== undefined) {
            counter[nums[i]] = counter[nums[i]] + 1;
        }
    }
    var result = [];
    for (var i = 0; i < nums.length; i = i + 1) {
        if (counter[0] > 0) {
            counter[0] = counter[0] - 1;
            result[i] = 0;
        }
        else if (counter[1] > 0) {
            counter[1] = counter[1] - 1;
            result[i] = 1;
        }
        else {
            result[i] = 2;
        }
    }
    return result;
};
// alternate
exports.sortColors2 = function (nums) {
    if (!nums)
        return [];
    if (nums.length === 1)
        return nums;
    var counter = [0, 0, 0];
    var n = nums.length;
    var current;
    var i;
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
    var i2 = n - counter[2] - 1;
    for (var i_1 = 0; i_1 < counter[1]; i_1 = i_1 + 1) {
        nums[i2 - i_1] = 1;
    }
    return nums;
};
//# sourceMappingURL=index.js.map