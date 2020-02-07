nums = [[1,2], [3,4]];
var r = 2, c = 4;

var matrixReshape = function(nums, r, c) {
 var arr =[];

    var arr3 =[];
for (var i of nums){
    arr.push(...i);
}

    if(r * c === arr.length ){
        for (var i = 0 ; i < r; i++){
            var arr2= [];
            for(var j = 0 ; j < c; j++){
                arr2.push(arr[0]);
                arr.shift();
            }
            arr3.push(arr2);
        }
        return arr3;
    }else{

        return nums;
    }
};
console.log(matrixReshape(nums, r, c));


//matlab,是有这个函数的（share）