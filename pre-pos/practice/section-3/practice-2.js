'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let json = {};
  for(let i = 0; i < objectB['value'].length; i++){
    json[objectB['value'][i]] = 1;
  }
  for(let i = 0;  i < collectionA.length; i++ ){
    if(collectionA[i]['key'] != undefined){
      if(json[collectionA[i]['key']] === 1){
        collectionA[i].count = collectionA[i].count - parseInt(collectionA[i].count/3);
      }
    }

  }
  return collectionA;
}
