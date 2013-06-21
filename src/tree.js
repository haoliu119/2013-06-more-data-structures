var makeTree = function(value){
  var newTree = {};

  newTree.value = value || undefined;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
  if (!this.children){
    this.children = [];
  }
  var args = Array.prototype.slice.call(arguments);
  _(args).each(function(item){
      this.children.push(makeTree(item));
  }, this);
};

treeMethods.contains = function(value, flag){
  flag = flag || this.value === value;

  if (!flag){
    _(this.children).each(function(child){
      flag = child.contains(value, flag);
    });
  }
  return flag;
};
