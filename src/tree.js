var makeTree = function(value){
  var newTree = {};

  newTree.value = value || undefined;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // !this.children && this.children = [];
  if (!this.children){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){

};
