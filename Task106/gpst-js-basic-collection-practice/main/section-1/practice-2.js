'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var collectionC = new Array();
    var k = 0;
    for(var i = 0; i < collectionA.length; i ++){
        for(var j = 0; j < collectionB.length; j++){
          for(var z = 0; z < collectionB[j].length; z++){
              if(collectionA[i] === collectionB[j][z]){
                  collectionC[k] = collectionB[j][z];
                  k++;
              }
          }
        }

    }
    return collectionC;
  return '实现练习要求，并改写该行代码。';
}
