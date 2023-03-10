/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //Solution#1
//     let s = ""+x;
//     s=s.split("");
    
//     if(s[0]!=="-"){
//         s.unshift("+");
//     }
//     let temp;
//     for(let i=1,j=s.length-1;i<s.length/2;i++,j--){
//         temp=s[i];
//         s[i]=s[j];
//         s[j]=temp
//     }
//     let result = Number(s.reduce((i,current)=>{
//         return i+current
//     }));
//     if(result> Math.pow(2, 31) || result< Math.pow(-2, 31)){        
//         return 0}
    
//     return(result)
    
    //solution #2
    let reversedNum=0;
    let reminder;
    
    while(x!=0){
        reminder = x%10;
        x=x/10 - reminder/10;
        reversedNum= reversedNum*10 +reminder;
        
    }
    if(reversedNum> Math.pow(2, 31) || reversedNum< Math.pow(-2, 31)){        
        return 0}
    return reversedNum
};