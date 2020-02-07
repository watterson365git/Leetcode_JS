var removeDuplicates = function(nums) {
    var arr=[];
    for (var i =0;i<nums.length;i++){
        if(i === nums.indexOf(nums[i])){
            arr.push(nums[i])
        }
    }
    return arr;
};
console.log(removeDuplicates([4,3,5,5,5,1,1,2]));




//filter + indexOf()
let arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0, 2, 2, 3];
function unique(arr){
    return arr.filter((item, index, array) =>  array.indexOf(item) === index);
}
console.log(unique(arr)); // [1, "a", "b", "d", "e", 0, 2, 3]





// Set() + [...()]
let arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0, 2, 2, 3];
function unique(arr){
    return [...(new Set(arr))];
}
console.log(unique(arr)); // [1, "a", "b", "d", "e", 0, 2, 3]