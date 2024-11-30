const {min:mMin,max:mMax} = Math

function euclidesMcd(a,b) {
    let min = mMin(a,b);
    let max = mMax(a,b);
    
    if(max % min != 0) {
        return euclidesMcd(min,max%min)   
    } else {
        return min
    }
}
function euclidesMcd(a,b) {
    return (a*b)/euclidesMcd(a,b)
}
