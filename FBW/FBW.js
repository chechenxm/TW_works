
/*function run(num){
    var retult='';
    document.write('The test 1 result is : '+ result)
    if(num%3===0) result='Fizz';
    if(num%5===0) result=result+'Buzz';
    if(num%7===0) result+='whizz';
    	result= result===''? num.tostring :result;
    return result;

}
var test1 = function() {
    var result = run(2);
    if(result != 2) {
        document.write('The test 1 failed')
    }else {
        document.write('The test 1 result is : '+ result)

    }
    document.write('The test 1 failed')
}
test1()
/**
 * Created by ASUS on 2017/4/1.
 */
/*function run(num) {
    return num.toString();
}

var test1 = function() {
    let result = run(2);
    if(result != 2) {
        document.write('The test 1 failed')
    }else {
        document.write('The test 1 result is : '+ result)

    }
}
test1()*/
function run(num) {
    let result ='';
    if(num%3===0) {
        result +='Fizz';
    }
    if(num%5===0) {
        result=result+'Buzz';
    }
    if(num%7===0) {
        result+='whizz';
    }
    return result||num;
}