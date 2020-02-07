
var nums = [1,1,0,1,1,1];
var findMaxConsecutiveOnes = function(nums) {
    var arr = nums.join('').split(0);
    var arr2 =[];
    for (var i of arr){
        arr2.push(i.length);
    }
  return Math.max(...arr2);
};

console.log(findMaxConsecutiveOnes(nums));