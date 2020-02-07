
var removeElement = function(nums, val) {

    for ( var i =0 ; i <nums.length ;i++){
        if(nums.indexOf(val) >= 0){
            nums.splice(nums.indexOf(val), 1);
            i--;
        }else{

            return nums;
        }
    }
    return nums;
};



console.log(removeElement([1,2,3,4,5,6,7,8,9], 3));