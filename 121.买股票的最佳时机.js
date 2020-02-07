var prices = [7,6,4,3,2,1,0];
var maxProfit = function(prices) {

   var arr2 =[];
   if (prices.length ===0){
       return 0
   }else
       for (var  i = 0; i< prices.length; i++){
           var arr =[];
           for (var j = i; j<prices.length ; j++){
               arr.push(prices[j]- prices[i]);
           }
           arr2.push( Math.max(...arr));
       }
       return Math.max(...arr2);
};


console.log(maxProfit(prices));