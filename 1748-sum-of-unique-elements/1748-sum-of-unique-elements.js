/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    //check for the unique element  
    let sum =0;
    let dupObj={};
    //traverse the sorted array
    for(let i=0;i<nums.length;i++){
        if(dupObj[nums[i]]){
            dupObj[nums[i]]+=1;
        }else{
            dupObj[nums[i]]=1;
        }
    }
    console.log(dupObj)
    //find the sum for the keys which there values equal only 1
    //iterat over obj using for..in loop
    for(let prop in dupObj){
        
        if(dupObj[prop]===1){
            console.log(Number(prop));
            sum=sum+Number(prop);
        }
    }
    
    return sum;
    
};