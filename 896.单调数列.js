
var A = [2,3,3,2,4];
var isMonotonic = function(A) {
    var A1 = Array.from(new Set(A));
    var arr =[];
    if((A1[1] -A1[0])>=0){
        for(var i =1; i<A.length ;i++){
          arr.push((A[i]-A[i-1]) >= 0 ? true : false) ;
        }
    }else if ((A1[1] -A1[0])<=0)
        {
        for(var i =1; i<A.length ;i++){
            arr.push((A[i]-A[i-1]) <= 0 ? true : false) ;
        }

    }
   return  arr.includes(false)? false : true;
};
console.log(isMonotonic(A));