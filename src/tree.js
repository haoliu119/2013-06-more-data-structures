var makeTree = function(value){
  var newTree = {};

  newTree.value = value || undefined;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
  // !this.children && this.children = [];
  if (!this.children){
    this.children = [];
  }
  var args = Array.prototype.slice.call(arguments);
  _(args).each(function(item){
      this.children.push(makeTree(item));
  }, this);
};

// treeMethods.addChildren = function(array){
//   this.addChild.apply(this, arguments);
// };

treeMethods.contains = function(value){

};
