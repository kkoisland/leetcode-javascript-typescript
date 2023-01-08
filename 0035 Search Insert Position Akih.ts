function searchInsert(nums: number[], target: number): number {
    // let inst: number = Math.trunc(target / nums[nums.length - 1] * nums.length) - 1
    let inst:number = 0
    let result: number = -1

    nums.unshift(-10000);
    nums.push(Number.MAX_VALUE);

    let Min:number = 0;
    let Max:number = nums.length - 1;

    while (result === -1) {
      inst = Math.floor((Min + Max) / 2)
      console.log(`${inst} : ${nums[inst]} / ${target} result: ${result} min: ${Min} max: ${Max}`)
      if (nums[inst] === target || 
         (nums[inst - 1] < target && nums[inst] > target)) {
        result = inst;
      } else if (nums[inst] < target) {
        Min = inst + 1
      } else if (nums[inst] > target) {
        Max = inst - 1
      }
    }

    return result - 1
};

console.log('result = ' + searchInsert([1,3,5,6], 5));
console.log('result = ' + searchInsert([1,3,5,6], 2));
console.log('result = ' + searchInsert([1,3,5,6], 7));
console.log('result = ' + searchInsert([1,3,5,6], 0));
console.log('result = ' + searchInsert([-1,3,5,6], 0));

/* reference 
function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i;
    }
    return nums.length;
};
*/