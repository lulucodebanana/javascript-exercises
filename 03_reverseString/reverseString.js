const reverseString = function(string) {
let newArray=string.split("");
let reverseArray=[];
for(i=0;i<string.length;i++){
reverseArray[i]=newArray[string.length-i-1];
}
return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
