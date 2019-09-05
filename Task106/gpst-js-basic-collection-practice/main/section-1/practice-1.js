'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var collectionC = new Array();
  var k = 0;
  for(var i = 0; i < collectionA.length; i ++){
    for(var j = 0; j < collectionB.length; j++){
      if(collectionA[i] === collectionB[j]){
        collectionC[k] = collectionB[j];
        k++;
      }
    }
    
  }
  return collectionC;
}
