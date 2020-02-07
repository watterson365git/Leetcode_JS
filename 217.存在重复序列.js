var removeDuplicates = function(nums) {
    var arr=[];
    for (var i =0;i<nums.length;i++){
        if(i === nums.indexOf(nums[i])){
            arr.push(nums[i])
        }
    }
    return arr;
};


var containsDuplicate = function(nums) {
    if(removeDuplicates(nums).join('') === nums.join('')){
        return false ;
    }else {
        return true;
    }


};