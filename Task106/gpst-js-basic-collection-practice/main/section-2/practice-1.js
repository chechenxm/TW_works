'use strict';

module.exports = function countSameElements(collection) {
    var collectionB = new Array();
    var flag = 0;
    for(var i = 0; i < collection.length; i++){
        flag = 0;
        for(var k = 0; k < collectionB.length; k++){
            if(collection[i] === collectionB[k].key){
                collectionB[k].count++;
                flag ++;
            }
        }
        if(flag === 0){
            var index = collectionB.length;
            collectionB[index] = new Object();
            collectionB[index].key = collection[i];
            collectionB[index].count = 1;
        }

    }
    return collectionB;
}
