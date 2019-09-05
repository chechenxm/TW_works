'use strict';

module.exports = function countSameElements(collection) {
    var collectionB = new Array();
    var flag = 0;
    var index;
    var strLen;
    var same;
    for(var i = 0; i < collection.length; i++){
      if((strLen = collection[i].length) > 1){
        index = collectionB.length;

        collectionB[index] = new Object();
        collectionB[index].key = collection[i].substring(0,1);
        collectionB[index].count = parseInt(collection[i].substring(strLen-1, strLen));
      }else {
          if((same = isSame(collection[i], collectionB)) != -1){
              collectionB[same].count++;
          }else{
            index = collectionB.length;
            collectionB[index] = new Object();
            collectionB[index].key = collection[i];
            collectionB[index].count = 1;
        }
      }
    }
    return collectionB;
}

function isSame(str, collectionC) {
    for(var k = 0; k < collectionC.length; k++){
        if(str === collectionC[k].key){
            return k;
        }
    }
    return -1;
}
