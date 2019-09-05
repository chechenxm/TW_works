'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionB = objectB.value;
    var times;
    for(var i = 0; i < collectionA.length; i ++){
        for(var j = 0; j < collectionB.length; j++){
            if(collectionA[i].key === collectionB[j]){
              times = parseInt(collectionA[i].count/3);
              collectionA[i].count = collectionA[i].count - times;
            }
        }
    }
    return collectionA;
}
