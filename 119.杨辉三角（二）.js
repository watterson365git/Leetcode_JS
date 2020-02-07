
var rowIndex = 3;
var getRow = function(rowIndex) {
    var rowIndex2 = rowIndex +1;
    var yanghui = [];
    for (let i = 0; i< rowIndex2 ; i++){
        var lay_arr = [];
        yanghui.push(lay_arr);

    }
    for (let i = 0;i< rowIndex2 ;i++){
        for (var j = 0; j< i+1 ; j++){
            if(j===0 || j=== i){
                yanghui[i][j]=1;
            }else{
                yanghui[i][j] = yanghui[i -1][j-1] +yanghui[i -1][j];
            }
            yanghui[0][0]=1;

        }
    }

    return yanghui[rowIndex2-1];
};

console.log(getRow(rowIndex));
//以上是借助118.杨辉三角.js完成的,O（n^2）




