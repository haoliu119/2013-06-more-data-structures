var makeSet = function(){
  var set = Object.create(makeSet.setPrototype); // fix me
  set._storage = undefined;
  return set;
};

makeSet.setPrototype = {};

makeSet.setPrototype.add = function(){
};

makeSet.setPrototype.contains = function(){
};

makeSet.setPrototype.remove = function(){
};
