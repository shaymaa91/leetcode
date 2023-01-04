/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let splittedNum = (""+num).split("");
    //console.log(splittedNum)
    let sum=0;
    for(let i = 0;i<splittedNum.length;i++){
        sum=sum+Number(splittedNum[i])
    }
    if(sum<10){
        return sum
    }else{
        return addDigits(sum)
    }
    
};