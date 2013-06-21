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

makeSet.setPrototype.remove = function(){
};

// superReduce = function(obj, iterator, initialValue) {
//   if (initialValue === undefined) initialValue = 0;

//   var result = initialValue;

//   _.each(obj, function (item){
//     result = iterator(result, item);
//   });

//   return result;
// };

  // Supercontains = function(collection, target) {
  //   return _.reduce(collection, function(wasFound, item){
  //     if(wasFound){
  //       return true;
  //     }
  //     if(_.isFunction(target) && _.isFunction(item)){
  //       return target.toString() === item.toString();
  //     } else {
  //       _.isEqual(item, target);
  //     }

  //     // return item === target;
  //   }, false);
  // };