// FOR EACH //
Array.prototype.myEach = function(callbackfunc) {
  for(let i =0; i< this.length; i++){
     callbackfunc(this[i]);
  }
};

// MAP //
Array.prototype.myMap = function(callbackfunc) {
  let newArr=[];
  for(let i =0; i< this.length; i++){
     newArr.push(callbackfunc(this[i]));
  }
  return newArr;
  };

// FILTER //
Array.prototype.myFilter = function(callbackfunc) {
  let newArr = [];
  for(let i =0; i< this.length; i++){
    if(callbackfunc(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// SOME //
Array.prototype.mySome = function(callbackfunc) {
  for(let i =0; i< this.length; i++){
    if(callbackfunc(this[i])){
        return true;
      }
    }
    return false;
};


// EVERY //
Array.prototype.myEvery = function(callbackfunc) {
  for(let i =0; i< this.length; i++){
    if(!callbackfunc(this[i])){
        return false;
      }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackfunc) {
  //initlize previous variable with the first item in the array
  let previous = this[0];

  //if an initial value is given in the arguments go through this for loop.
  if(arguments.length > 1){
    previous = arguments[1];
    for(let i = 0; i< this.length; i++){
      previous = callbackfunc(previous, this[i]);
    }
    return previous;
  }

  //for loop for if no initial value was given and the first value of array is used
  for(let i = 1; i< this.length; i++){
    previous = callbackfunc(previous, this[i]);
  }
  return previous;

};

// INCLUDES //
Array.prototype.myIncludes = function(element) {
  for(let i = 0; i<this.length; i++){
      if(this[i] == element){
        return true;
      }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function() {
  for(let i = 0; i<this.length; i++){
      if(this[i] == arguments[0]){
        return i;
      }
    }
      return -1;
};
// PUSH //
Array.prototype.myPush = function() {
    for(let i = 0; i<arguments.length; i++){
        this[this.length] = arguments[i];
    }
  return this.length;
};
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {
  for(let i = this.length-1; i>-1; i--){
      if(this[i] === arguments[0]){
        return i;
      }
    }
      return -1;
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
