// given a string find the NUMBER of unique characters in that string : turnIP innovations

//solution-1: my own
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


//solution two: USING ARRAY to reduce repeated checking on the unique character which was done in the above 
//method

let uniqueChars = [str[0]];

  for(var i=0; i<str.length; i++){

    for(var j=0; j<uniqueChars.length; j++){
      
      if(str[i]===uniqueChars[j]){
        break;
      }

      if(j===uniqueChars.length-1 && uniqueChars[j]!==str[i]){
        uniqueChars.push(str[i]);
      }
    }
  }

console.log(uniqueChars.length);

