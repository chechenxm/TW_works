'use strict';

function collectSameElements(collectionA, collectionB) {
  let sameWords = new Array();
  let arrayB = collectionB.toString().split(',');
  let json = {};
  for(let i = 0; i < arrayB.length; i++){
    json[arrayB[i]] = 1;
  }
  for(let i = 0;  i < collectionA.length; i++ ){
    if(json[collectionA[i]] === 1){
      sameWords.push(collectionA[i]);
    }
  }
  return sameWords;
}
