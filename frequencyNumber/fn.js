function main(String){
    if(String === '')
        return String;
    let wordsString = splitString(String);
    let wordsFrequency = countFreqy(wordsString);
    let result = sortFrequency(wordsFrequency);
    return format(result);
}

function splitString(String) {
    String = String.replace(/(^\s*)|(\s*$)/g,'');
    let wordsString = String.split(/\s+/);
    return wordsString;
}

function countFreqy(wordsString){
    let count = new Array;
    let words = new Array;
    let wordsFrequency = new Array;
    let cou;
    let wor = {};
    let index;
    for(var i = 0, len = wordsString.length; i < len; i ++ ){
       /* 利用数组作媒介排序
       if( (index = words.indexOf(wordsString[i])) === -1){
            words.push(wordsString[i]);
            wordsFrequency.push({word: wordsString[i], count: 1});
        }else{
            wordsFrequency[index].count ++;
        }*/

       //利用Json对象key值唯一排序
        if(wor[wordsString[i]] === undefined ){
            wordsFrequency.push({word: wordsString[i], count:1});
            wor[wordsString[i]] = wordsFrequency.length - 1;
        }else {
            wordsFrequency[wor[wordsString[i]]].count ++;
        }
    }
    return wordsFrequency;
}

function compare(property){
    return function(a,b){
        return a[property] - b[property];
    }
}
function sortFrequency(wordsFrequency){
    wordsFrequency.sort(compare('count'));
    return wordsFrequency;
}


function  format( wordsFrequency) {
    let result = '';
    for(var i = 0,len =  wordsFrequency.length; i < len; i ++){
        if(i > 0){
            result += '\r\n';
        }
        result = result +  wordsFrequency[i].word + ' ' +  wordsFrequency[i].count;
    }
    return result;
}

module.exports = {
    splitString : splitString,
    countFreqy : countFreqy,
    sortFrequency : sortFrequency,
    main: main
}

