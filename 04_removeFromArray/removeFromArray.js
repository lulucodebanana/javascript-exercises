const removeFromArray = function(arr,...args) {

    for(i=0;i<args.length;i++){
    for(j=0;j<arr.length;j++){
        if(args[i]===arr[j]){arr.splice(j,1)
        }
    }
}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
