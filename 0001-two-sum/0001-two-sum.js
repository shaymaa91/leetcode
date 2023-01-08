/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    //solution #1
    /*
    let result = [];
    for(let i = 0 ; i<nums.length-1; i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){result.push(i,j); break;}
        }
    }
    return result
    */
    
    //Solution #2
    let m = new Map();
    for(let i=0;i<nums.length;i++){
       
        if(m.get(nums[i])!= undefined){
            return [m.get(nums[i]),i];
        }else{
            m.set(target-nums[i],i);
        }
    }
    

  
};