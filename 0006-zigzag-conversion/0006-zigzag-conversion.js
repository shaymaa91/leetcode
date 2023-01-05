/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let direction='up';
    let arr= new Array(numRows).fill('');
    let row = 0;
    let result='';
    
    //if the length is 1, return the array 
    if(s.length === 1||numRows==1){return s}
    
    //loop over the array to re-arrange the values in zigzag mode
    for(let i=0;i<s.length;i++){
        
        arr[row]+=s[i];
        
        
        if(row==0){
            direction ='up';
        }else if(row== numRows-1){
            direction = 'down'
        }
        
        if(direction=='up'){            
            row++;
        }else {
            row--;
        }
    }
   
    
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    console.log(result)
    return result;
};