var numRows = 5;

var generate = function(numRows) {
    var yanghui = [];
    for (let i = 0; i< numRows ; i++){
        var lay_arr = [];
        yanghui.push(lay_arr);

    }

    for (let i = 0;i< numRows ;i++){
        for (var j = 0; j< i+1 ; j++){
            if(j===0 || j=== i){
                yanghui[i][j]=1;
            }else{
                yanghui[i][j] = yanghui[i -1][j-1] +yanghui[i -1][j];
            }
            yanghui[0][0]=1;

        }
    }

    return yanghui;
};
console.log(generate(numRows));