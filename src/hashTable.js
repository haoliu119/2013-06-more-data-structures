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

  // console.log(this._storage);

   // we check if there's a single KVP with same key, in which case we overwrite:
  // else if(!Array.isArray(pair[0])){
  //   if(pair[0] === key){
  //     this.write(index, key, value);
  //   }
  //   // else we have a collision:
  // } else {
  //   this._storage.set(index, [].push(pair[0]));
  //   // pair = this._storage.get(index);
  //   _.each(this._storage.get(index), function(item){

  //   });
  // }
};
// key === pair[0]


HashTable.prototype.retrieve = function(key){
};

HashTable.prototype.remove = function(key){
};

HashTable.prototype.write = function(index, key, value){
  this._storage.set(index, [key, value]);
};

