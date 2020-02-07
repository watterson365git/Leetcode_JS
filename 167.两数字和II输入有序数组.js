

var twoSum = function(numbers, target) {
for(let i =0 ; i < numbers.length ; i++){
    if (numbers[i] <= target  && numbers.includes(target - numbers[i]))
    {
        if (numbers.indexOf(target - numbers[i]) ===i )
        {


            return [i+1 , numbers.indexOf(target - numbers[i]) + 2]
        } else{

            return [i+1 , numbers.indexOf(target - numbers[i]) + 1]
        }
    }
}
};

console.log(twoSum([0,0,2],0));