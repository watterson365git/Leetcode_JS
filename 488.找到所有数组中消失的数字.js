var removeDuplicates = function(nums) {
    var arr=[];
    for (var i =0;i<nums.length;i++){
        if(i === nums.indexOf(nums[i])){
            arr.push(nums[i])
        }
    }
    return arr;
};


var findDisappearedNumbers = function(nums) {
    var temp = [];
    var temp2 =[];

    var sort_nums = removeDuplicates(nums.sort((a,b)=>{return a-b;}));

    for(var i =1; i<=sort_nums[sort_nums.length-1];i++){
        temp.push(i)

    }

     if(sort_nums.join('') === temp.join('')){
         if(nums.join('') === temp.join('')){
             return []
         }else{
             return [temp[temp.length-1]+1];
         }
     }else{

         for (var i =0;i<nums.length;i++){
            if(!removeDuplicates(nums.sort((a,b)=>{return a-b;})).includes(temp[i])){
            temp2.push(temp[i]);
            }
  }
            return temp2;}



};
console.log(findDisappearedNumbers([2,3,6,7,1]));