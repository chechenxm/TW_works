'use strict';

function collectSameElements(collectionA, objectB) {
  let sameWords = new Array();
  let json = {}
  for(let i = 0; i < objectB['value'].length; i++){
    json[objectB['value'][i]] = 1;
  }
  for(let i = 0;  i < collectionA.length; i++ ){
    if(json[collectionA[i]] === 1){
      sameWords.push(collectionA[i]);
    }
  }
  return sameWords;
}
