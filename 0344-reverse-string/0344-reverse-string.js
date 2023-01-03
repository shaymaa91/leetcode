/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp=0;
    for(let i=0, j=s.length-1;i<Math.ceil(s.length/2);i++,j--){
        temp=s[i]   
        s[i]=s[j]
        s[j]=temp
        
        
            
    }
};