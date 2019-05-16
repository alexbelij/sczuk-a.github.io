
function format(number){
    let pow = Math.floor(Math.log10(number));
    if(pow <3) return number.toFixed(2);
    let xxx = number/Math.pow(10,pow);
    xxx = xxx.toFixed(2);
    return xxx + "e" + pow;
}