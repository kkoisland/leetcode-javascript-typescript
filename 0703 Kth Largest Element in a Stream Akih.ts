class KthLargest {
    kth: number = 0;
    stream: number[] = [];
  
      constructor(k: number, nums: number[]) {
        this.kth = k - 1;
        this.stream = nums;
      }
  
      add(val: number): number {
        this.stream.push(val);
        return this.stream.sort((a,b) => b - a)[this.kth]
      }
  }
  
  /**
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */