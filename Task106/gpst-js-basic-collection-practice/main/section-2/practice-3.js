'use strict';

module.exports = function countSameElements(collection) {
    var collectionB = new Array();
    var index;
    var strLen;
    var same;
    for(var i = 0; i < collection.length; i++){
        index = collectionB.length;
        if((strLen = collection[i].length) === 3){
            if((same = isSame(collection[i].substring(0, 1), collectionB)) != -1){
                collectionB[same].summary = collectionB[same].summary + parseInt(collection[i].substring(strLen - 1, strLen));
            }else {
                collectionB[index] = new Object();
                collectionB[index].name = collection[i].substring(0, 1);
                collectionB[index].summary = parseInt(collection[i].substring(strLen - 1, strLen));
            }
        }else if((strLen = collection[i].length) === 4){
            if((same = isSame(collection[i].substring(0, 1), collectionB)) != -1){
                collectionB[same].summary = collectionB[same].summary + parseInt(collection[i].substring(2, 3));
            }else {
                collectionB[index] = new Object();
                collectionB[index].name = collection[i].substring(0, 1);
                collectionB[index].summary = parseInt(collection[i].substring(2, 3));
            }
        }else if((strLen = collection[i].length) === 5){
            if((same = isSame(collection[i].substring(0, 1), collectionB)) != -1){
                collectionB[same].summary = collectionB[same].summary + parseInt(collection[i].substring(2, 4));
            }else {
                collectionB[index] = new Object();
                collectionB[index].name = collection[i].substring(0, 1);
                collectionB[index].summary = parseInt(collection[i].substring(2, 4));
            }
        }else {
            if((same = isSame(collection[i], collectionB)) != -1){
                collectionB[same].summary++;
            }else{
                index = collectionB.length;
                collectionB[index] = new Object();
                collectionB[index].name = collection[i];
                collectionB[index].summary = 1;
            }
        }
    }
    return collectionB;
}

function isSame(str, collectionC) {
    for(var k = 0; k < collectionC.length; k++){
        if(str === collectionC[k].name){
            return k;
        }
    }
    return -1;
}