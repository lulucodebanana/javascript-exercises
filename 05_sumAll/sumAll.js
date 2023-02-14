const sumAll = function(a,b) {
    let sum;
    if(!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<0){return 'ERROR'}
    else{
        if(a<=b){
            sum=a;
        }else{
            sum=b; 
            b=a;
            a=sum;
        }
        for(i=a+1;i<=b;i++){
            sum+=i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
