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
  var index = this.getSlot(key)[0];
  var slot = this.getSlot(key)[1];
  // if slot in array has not been assigned:
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
  // var index = getIndexBelowMaxForKey(key, this._limit);
  var slot = this.getSlot(key)[1];

  return slot ? _.reduce(slot, function(memo, value){
    value[0] === key && (memo = value[1]);
    return memo;
  }, undefined, this) : undefined;
};

HashTable.prototype.remove = function(key){
  // var slot = this.getSlot(key)[1];
  // var flattened = _(slot).flatten();
  // var index = (_(flattened).indexOf(key)/2);
  // slot.splice(index, 1);

  var slot = this.getSlot(key)[1];
  var index = _.reduce(slot, function(memo, pair, i){
    return (pair[0] === key) ? i : memo;
  }, -1);
  if (index >= 0) {
    slot.splice(index,1);
  }
};

HashTable.prototype.getSlot = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  return [index, this._storage.get(index)];
};

