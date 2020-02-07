var A = [2];
var queries = [[4,0]];

var sumEvenAfterQueries = function(A, queries) {
var arr = A;
var arr2 = [];
    var arr3 = [];

var que = queries;
    for (let i = 0;i< que.length ;i++){

        arr[que[i][1]] = arr[que[i][1]] + que[i][0];

        arr2.push(arr.filter(function (n) {
            if(n%2 ===0){
                return n ;
            }

        }));

    }

    for (var i of arr2){
        if (i.length == 0){
            arr3.push(0);
        }else{
            arr3.push(i.reduce(function (a,b,c) {
                return a+b;

            }));

        }
    }

    return arr3
};

console.log( sumEvenAfterQueries(A, queries));