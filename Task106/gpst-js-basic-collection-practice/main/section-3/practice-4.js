'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = new Array();
    var collectionB = objectB.value;
    var same;
    var index;
    var times;
    for(var i = 0; i < collectionA.length; i++){
      if(collectionA[i].length != 1){
        index = collectionC.length;
        collectionC[index] = new Object();
        collectionC[index].key = collectionA[i].substring(0,1);
        collectionC[index].count = parseInt(collectionA[i].substring(collectionA[i].length-1, collectionA[i].length));
      }else {
          if ((same = isSame(collectionA[i], collectionC)) != -1) {
              collectionC[same].count++;
          } else {
              index = collectionC.length;
              collectionC[index] = new Object();
              collectionC[index].key = collectionA[i];
              collectionC[index].count = 1;
          }
      }
    }

    for(var i = 0; i < collectionC.length; i ++){
        for(var j = 0; j < collectionB.length; j++){
            if(collectionC[i].key === collectionB[j]){
                times = parseInt(collectionC[i].count/3);
                collectionC[i].count = collectionC[i].count - times;
            }
        }
    }


    return collectionC;
}
function isSame(str, collection) {
    for(var k = 0; k < collection.length; k++){
        if(str === collection[k].key){
            return k;
        }
    }
    return -1;
}
