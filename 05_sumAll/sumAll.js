const sumAll = function(x,y) {
    let sum=0;
    if (typeof x =="number" && typeof y=="number" && x>=0 && y>=0){
        if (x<y){
            for(let i=x; i<=y; i++){
                sum+=i;
            }
        } else{
            for(let i=y; i<=x; i++){
                sum+=i;
            }
        }
        
    }else return "ERROR"
    for(let i=x; i<=y; i++){
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
