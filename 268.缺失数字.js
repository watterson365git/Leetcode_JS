var nums = [9,6,4,2,3,5,7,0,1];

var missingNumber = function(nums) {


    var max = Math.max(...nums);
    var arr =[];
    for (let i =0 ; i<=max ; i++){
        arr.push(i);
    }

   // if(nums.sort((a,b) => {return a-b}).join('') === arr.join('')){
   //     return arr[arr.length-1] + 1;
   // }else {
   //     return arr.reduce((a,b) => {return  a+b}) - nums.reduce((a,b) => {return  a+b});
   // }
    var sum = 0;
    arr = [...arr,...nums];
    //console.log(arr);
    for (let i =1 ; i<=arr.length ; i++){
       sum ^= arr[i];
    }
    return sum;
};
console.log(missingNumber(nums));