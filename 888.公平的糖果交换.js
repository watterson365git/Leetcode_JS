
var A = [1,2,5], B = [6,2,4];
var fairCandySwap = function(A, B) {
    var sum_A = A.reduce((a,b,c)=>{return a+b;});
    var sum_B = B.reduce((a,b,c)=>{return a+b;});
    if (sum_A > sum_B){
        for (var i of A){
            for (var j of B){
                if((i -j) === (sum_A-sum_B)/2){
                    return [i,j]
                }
            }
        }
    }else if (sum_A < sum_B) {
        for (var i of A){
            for (var j of B){
                if((j-i) === (sum_B-sum_A)/2){
                    return [i,j]
                }
            }
        }
    }else {
        return []
    }


};


console.log(fairCandySwap(A, B));