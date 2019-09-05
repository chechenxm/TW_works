// Write your cade below:

function caclRemaindar(num1,num2) {
    return num1%num2;

};

function caclSum(num) {
    let result = 0;
    for(let i = 0; i < num.length; i++){
        result += num[i];
    }
    return result;
};

function caclSumInConditon(array, num) {
   let result = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] < num){
            result += array[i];
        }
    }
    return result;

};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}