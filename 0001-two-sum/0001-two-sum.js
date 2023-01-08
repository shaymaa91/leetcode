/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    let m = new Map();
    for(let i=0;i<nums.length;i++){
       
        if(m.get(nums[i])!= undefined){
            return [m.get(nums[i]),i];
        }else{
            m.set(target-nums[i],i);
        }
    }
    

  
};