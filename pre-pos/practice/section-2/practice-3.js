'use strict';

function countSameElements(collection) {
  let result = new Array();
  let temp = {};
  let count = 1;
  let word;
  let key_count ={}
  for(let i = 0; i < collection.length; i++){
     word = collection[i];
    if(!word.match(/^[a-z]$/)){
      key_count = matchreg(word);
      word = key_count['name'];
      count = key_count['summary'];
    }
    if(temp[word] === undefined){
        temp[word] = count;
    }else{
      temp[word] = temp[word] + count;
    }
    count = 1;
  }
  for(var item in temp){
    result.push({name:item,summary:temp[item]});
  }
  return result;
}

 function matchreg(string){
  let reg1 =/^[a-z]-([0-9]+)$/;
  let reg2 =/^[a-z](\[)([0-9]+)(])$/;
  let reg3 =/^[a-z]:([0-9]+)$/;
  let key_count = {};
  let temp = new Array();
  if(string.match(reg1)){
    temp = string.split('-');
  }
  if(string.match(reg2)){
    temp = string.split(/[\[\]]/);
  }
  if(string.match(reg3)){
    temp = string.split(':');
  }
  key_count['name'] = temp[0];
  key_count['summary'] = parseInt(temp[1]);
   return key_count;
}
