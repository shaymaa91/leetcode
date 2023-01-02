/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let countObj = {};
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(countObj[nums[i]]){
            countObj[nums[i]]=countObj[nums[i]]+1;
        }else{
            
            countObj[nums[i]]=1
        }
        
        
    }
    console.log(countObj)
    //set all 0's at the biggening of the arr
    for(let i=0;i<countObj[0];i++){
        result.push(0)
    }
    //set 1's
    for(let i=0;i<countObj[1];i++){
        result.push(1)
    }
    //set 2's
    for(let i=0;i<countObj[2];i++){
        result.push(2)
    }
    
    //nums = [...result];
    //we need to modify the nums array each element
    for(let i =0;i<nums.length;i++){
        nums[i]=result[i]
    }
    console.log(nums)
    console.log(result)
    return nums
    
    
};