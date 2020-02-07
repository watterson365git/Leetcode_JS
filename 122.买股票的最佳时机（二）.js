var prices =[7,1,5,3,6,4];

var maxProfit = function(prices) {
    var tmp = 0;
    for (var i = 1 ; i< prices.length ; i++){
        if (prices[i] - prices[i-1] <0){
            tmp += 0;
        }else {
            tmp += prices[i] - prices[i-1];
        }
    }
    return tmp ;
};
console.log(maxProfit(prices));