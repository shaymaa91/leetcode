/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occObj ={};
    let resultSet=new Set();
    for(let i=0; i<arr.length;i++){
        if(occObj[arr[i]]){
            occObj[arr[i]]=occObj[arr[i]]+1;
        }else{
            occObj[arr[i]]=1;
        }
    }
    
   for(let i in occObj){
       if(resultSet.has(occObj[i])){
           return false
       }else{
           resultSet.add(occObj[i])
       }
   }
    return true
    
};