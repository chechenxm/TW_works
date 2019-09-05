'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  var temp = {};
  for(let i = 0; i < collectionA.length; i++){
    if(temp[collectionA[i]] === undefined){
      temp[collectionA[i]] = 1;

    }else{
      temp[collectionA[i]] ++;
    }
  }
  for(var item in temp){
    collectionC.push({key:item,count:temp[item]});
  }
  let json = {};
  for(let i = 0; i < objectB['value'].length; i++){
    json[objectB['value'][i]] = 1;
  }
  for(let i = 0;  i < collectionC.length; i++ ){
    if(collectionC[i]['key'] != undefined){
      if(json[collectionC[i]['key']] === 1){
        collectionC[i].count = collectionC[i].count - parseInt(collectionC[i].count/3);
      }
    }

  }
  return collectionC;
}
