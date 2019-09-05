'use strict';

function countSameElements(collection) {
var result = new Array();
  var temp = {};
  for(let i = 0; i < collection.length; i++){

    if(temp[collection[i]] === undefined){
      var reg =/^[a-z]-([0-9]+)$/;
      if(collection[i].match(reg)){
          let key_count = collection[i].split('-');
          temp[key_count[0]] = parseInt(key_count[1])
      }else{
        temp[collection[i]] = 1;
      }
    }else{
      temp[collection[i]] ++;
    }
  }
  for(var item in temp){
    result.push({key:item,count:temp[item]});
  }
  return result;
}
