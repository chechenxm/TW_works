'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionC = new Array();
    var collectionB = objectB.value;
    var k = 0;
    for(var i = 0; i < collectionA.length; i ++){
        for(var j = 0; j < collectionB.length; j++){
            if(collectionA[i] === collectionB[j]){
                collectionC[k] = collectionA[i];
                k++;
            }
        }

    }
    return collectionC;
}
