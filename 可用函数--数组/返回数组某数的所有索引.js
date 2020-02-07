var nums = [1,3,3,34,5,6,7,8,9,0,3];
var n =3;
var findallindex = function(nums,n) {
    var arr =[];
    for (var i =0;i<nums.length;i++){
        if(n === nums[i]){
            arr.push(i);
        }
    }
    return arr;
};
console.log(findallindex(nums,n));