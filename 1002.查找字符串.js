var A =["bella","label","roller"];
var commonChars = function(A) {
    var A2 = A;
    var arr = A2[0].split('');
    var arr3 =[];
    var arr5 = [];

    for (var i =0 ; i<A.length ; i++){
        var arr2 = [] ;
        for (var j = 0 ; j <A[0].length ; j++){
            if(A2[i].includes(arr[j])){
                arr2.push(true);
                A2[i] = A2[i].replace(arr[j],'1');
            }else{
                arr2.push(false);
            }

        }
        arr3.push(arr2);

    }

     var arr4 = arr3[0].map((v,i) =>arr3.map((a,j) =>a[i]));

    for (var i = 0 ; i <arr4.length ; i++){
        if(!arr4[i].includes(false)){
           arr5.push(arr[i]);
        }

    }

    return arr5;
};

console.log(commonChars(A));