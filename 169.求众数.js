//摩尔投票法的典型代表
//摩尔投票问题，找出一组数字序列中出现次数大于总数1/2的数字（并且假设这个数字一定存在）。
// 显然这个数字只可能有一个。
// 摩尔投票算法是基于这个事实：每次从序列里选择两个不相同的数字删除掉（或称为“抵消”），
// 最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个。请首先认同这个事实，这里不证明了~
var nums = [2,2,1,1,1,2,2];
var majorityElement = function(nums) {

    if(nums.length>1){
        return nums.sort((a, b) => {
            return a - b
        })[Math.floor(nums.length / 2) ];
    }else{
        return nums[0];
    }

};



console.log(majorityElement(nums));