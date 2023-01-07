/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = ""+x;
    s=s.split("");
    
    if(s[0]!=="-"){
        s.unshift("+");
    }
    console.log(s);
    let temp;
    for(let i=1,j=s.length-1;i<s.length/2;i++,j--){
        temp=s[i];
        s[i]=s[j];
        s[j]=temp
    }
    console.log(s)
    let result = Number(s.reduce((i,current)=>{
        return i+current
    }));
    console.log(result)
    if(result> Math.pow(2, 31) || result< Math.pow(-2, 31)){
        
        return 0}
    
    return(result)
};