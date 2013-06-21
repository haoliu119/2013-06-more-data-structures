var makeSet = function(){
  var set = Object.create(makeSet.setPrototype);
  set._storage = undefined; // an array, which can store any object type
  return set;
};

makeSet.setPrototype = {};

makeSet.setPrototype.add = function(value){
  if (!this._storage){
    this._storage = [];
  }
  if(!this.contains(value)){
    this._storage.push(value);
  }
};

/*
* takes in any object type, including functions
* uses .toString() to compare two function syntax
* uses a refactored version of _.reduce to handle functions and objects
*/
makeSet.setPrototype.contains = function(target){
  return _.reduce(this._storage, function(wasFound, item){
    if(wasFound){
      return true;
    }
    if(_.isFunction(target) && _.isFunction(item)){
      return target.toString() === item.toString();
    } else {
      return _.isEqual(item, target);
    }
  }, false, this);
};

makeSet.setPrototype.remove = function(target){
  var targetIndex = superIndexOf(this._storage, target);
  if(targetIndex >= 0){this._storage.splice(targetIndex, 1);}
  else{return target + " is not in the set!";}
};

 superIndexOf = function(array, target){
    var result = -1;

    _.each(array, function(item, index) {
      if(_.isFunction(target) && _.isFunction(item)){
        if(target.toString() === item.toString() && result === -1){
          result = index;
        }
      } else if (_.isEqual(item, target) && result === -1){
        result = index;
      }
    }, this);

    return result;
  };