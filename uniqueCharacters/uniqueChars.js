// given a string find the NUMBER of unique characters in that string : turnIP innovations
let str = "eabcrtdhheleloohe";
let count=1;

for(var i = 1; i<str.length; i++){
  for (var j = 0; j < i; j++) {
    if(str[i]===str[j]){
        break;
    }
    if(str[i]!==str[j] && (j===i-1)){
      ++count;
    }
  }

}

console.log(`count: ${count}`);
