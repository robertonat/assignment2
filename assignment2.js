// FOR EACH //
Array.prototype.myEach = function(callbackfunc) {
  for(let i =0; i< this.length; i++){
     callbackfunc(this[i]);
  }
};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

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
    for(key in object) {
      keys[keys.length] = key;
    }
    return keys;
};

// VALUES //
Object.grabValues = function(object) {
  let value = [];
  for(key in object) {
      if(object.hasOwnProperty(key)) {
          value[value.length] = object[key];
      }
  }
  return value;
};
