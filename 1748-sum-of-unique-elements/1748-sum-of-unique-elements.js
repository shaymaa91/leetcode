/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    //check for the unique element
    //sort the array, so if any duplicate they will be adjacents
    let sortedNums = nums.sort();
    let sum =0;
    let dupObj={};
    //traverse the sorted array
    for(let i=0;i<sortedNums.length;i++){
        if(dupObj[sortedNums[i]]){
            dupObj[sortedNums[i]]+=1;
        }else{
            dupObj[sortedNums[i]]=1;
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