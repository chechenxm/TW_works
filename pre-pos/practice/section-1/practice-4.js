'use strict';

function collectSameElements(collectionA, objectB) {
  let sameWords = new Array();
  let json = {};
  for(let i = 0; i < objectB['value'].length; i++){
    json[objectB['value'][i]] = 1;
  }
  for(let i = 0;  i < collectionA.length; i++ ){
    if(collectionA[i]['key'] != undefined){
      if(json[collectionA[i]['key']] === 1){
        sameWords.push(collectionA[i]['key']);
      }
    }

  }
  return sameWords;
}
