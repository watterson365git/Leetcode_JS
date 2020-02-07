/**
 * @param {number[]} A
 * @return {boolean}
 */

var A = [6,1,1,13,-1,0,-10,20];
var canThreePartsEqualSum = function(A) {

    var arr = A.concat();
    var arr_rev = A.reverse();
    var count_f = 0;
    var count_r = 0;
    var tmp1 =[];
    var tmp2 =[];
    var sum =arr.reduce((a,b)=>{return a+b});

    //console.log(sum);


    if(sum%3 !== 0){
        return false;
    }else {

        for (let i =0;i<arr.length; i++){
            count_f += arr[i];
            tmp1.push(arr[i]);
            if (count_f === sum/3) {
                break}

        }
        for (let i =0;i<arr.length; i++){
            count_r += arr_rev[i];
            tmp2.push(arr_rev[i]);
            if (count_r === sum/3) {
                break;
            }

        }
      //  console.log(count_f);
      //  console.log(count_r);
      //  console.log(tmp1);
      //  console.log(tmp2);



    }

    if (count_r === count_f && count_r === sum/3 &&tmp1.length+tmp2.length <arr.length){
        return true
    }else {
        return false
    }

};


console.log(canThreePartsEqualSum(A));