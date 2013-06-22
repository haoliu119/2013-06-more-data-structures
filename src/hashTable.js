var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //

  // this._storage is initialized as an object with .get .set methods,
  // and private variable storage [], private function checklimit
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  // if slot in array has not been assigned:
  var slot = this._storage.get(index);
  if(slot === undefined){
    this._storage.set(index, [[key, value]]);
  } else {
    var found = false;
    _.each(slot, function(item){
      if(item[0] === key){
        item[1] = value;
        found = true;
      }
    });
    found || slot.push([key, value]);
  }
};

// retrieve returns value associated with the given key, otherwise returns undefined.
HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var slot = this._storage.get(index);

  return slot ? _.reduce(slot, function(memo, value){
    value[0] === key && (memo = value[1]);
    return memo;
  }, undefined, this) : undefined;
};

HashTable.prototype.remove = function(key){
};

HashTable.prototype.write = function(index, key, value){
  this._storage.set(index, [key, value]);
};

