var moveZeroes = function(nums) {
    for ( var i =0 ; i <nums.length ;i++){
        if(nums.indexOf(0) !== -1){
            nums.splice(nums.indexOf(0), 1);
            nums.push(0);
            //i--;
        }else{
            return nums;
        }

    }
    return nums;
};

console.log(moveZeroes([0,0,0,0,0,0,4]));