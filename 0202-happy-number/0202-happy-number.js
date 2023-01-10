/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {    
    let m = new Map();
    const checkHappy=(n)=>{
        let newN=0;
    //the root case
    if(n==1){return true}
    //else split the number after conver it to string
    let splitted = ""+n;
    splitted=splitted.split("");
    //replace the number by the sum of the squares of its digits.
    for(let i=0;i<splitted.length;i++){
        newN+=Math.pow(Number(splitted[i]),2);
       
    }
     newN=""+newN;
    // if the number is already exists
    //then return false it means we are looping in endlessly cycle
    //else store the value in a Map
    if(!m.has(newN)){ 
        m.set(newN,newN)     
    }else{return false;}
    
    //recursivly check for the new number
    return checkHappy(newN)
    }
    
   return checkHappy(n);
   
}