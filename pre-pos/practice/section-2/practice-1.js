'use strict';

function countSameElements(collection) {
  var result = new Array();
  var temp = {};
  for(let i = 0; i < collection.length; i++){
    if(temp[collection[i]] === undefined){
      temp[collection[i]] = 1;

    }else{
      temp[collection[i]] ++;
    }
  }
  for(var item in temp){
    result.push({key:item,count:temp[item]});
  }
  return result;
}
