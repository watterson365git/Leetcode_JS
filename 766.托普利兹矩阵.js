var matrix = [[57,54,1],[84,16,1]];

function copyArr (obj){
    var array = [];
    for (var i = 0; i < obj.length; i++) {
        array.push(obj[i].slice());

    }
    return array;
}
var isToeplitzMatrix = function(matrix) {

    var arr2 =[];

if(matrix.length < 2){
    return true;

}else{


    for(var i = 0; i< matrix.length-1; i++){

        var arr = copyArr (matrix);
        arr[i].pop();
        console.log(arr);
        arr[i+1].shift();
        console.log(arr);

        if(arr[i].join('') === arr[i+1].join('')){
            arr2.push(true);

        }else{
            arr2.push(false);

        }


        console.log(arr2)

    }

    if(!arr2.includes(false)){
        return  true;
    }else{
        return false;
    }

}


};
console.log(isToeplitzMatrix(matrix));
//只需判断：前行中除最后一个元素外剩余的元素完全等于后行中除第一个元素外剩余的元素。