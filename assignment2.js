// FOR EACH //
Array.prototype.myEach = function(callbackfunc) {
  for(let i =0; i< this.length; i++){
     callbackfunc(this[i]);
  }
};

// MAP //
Array.prototype.myMap = function() {
  let newArr=[];
  for(let i =0; i< this.length; i++){
     newArr.push(callbackfunc(this[i]));
  }
  return newArr;
  };

// FILTER //
Array.prototype.myFilter = function() {
  let newArr = [];
  for(let i =0; i< this.length; i++){
    if(callbackfunc(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// SOME //
Array.prototype.mySome = function() {
  for(let i =0; i< this.length; i++){
    if(callbackfunc(this[i])){
        return true;
      }
    }
    return false;
};


// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function(object) {
    let keys = [];
    for(let key in object) {
      keys[keys.length] = key;
    }
    return keys;
};

// VALUES //
Object.grabValues = function(object) {
  let value = [];
  for(let key in object) {
      if(object.hasOwnProperty(key)) {
          value[value.length] = object[key];
      }
  }
  return value;
};
