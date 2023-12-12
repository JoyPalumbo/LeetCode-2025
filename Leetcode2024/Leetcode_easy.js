// 1. Two Sum 6/29
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    };


    // 9. Palindrome Number 6/29 RETRY!!!

    /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = x.toString().split('').reverse().join('');
      return x.toString() === rev
  
  };
