/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.nums = nums
};

/** 
 * @param {number} val
 * @return {number}
 */

// Thanks to Akih
// Runtime 4082 ms Beats 12.93% Memory 59.3 MB Beats 18.49%
// solution #1

KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((a,b) => b - a);
    const num = this.nums.slice(this.k-1, this.k);
    return num;
};

// solution #2 Thanks to Akih
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    return this.nums.sort((a,b) => b - a)[this.k - 1];
};


// Validate
let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4));   // return 8