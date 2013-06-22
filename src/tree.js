var makeTree = function(value, parent){
  var newTree = {};

  newTree.value = value || undefined;
  newTree.children = undefined; // or an array of child-trees
  newTree.parent = parent || null;

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
    // var newTree = makeTree(item, this);
    this.children.push(makeTree(item, this));
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

treeMethods.removeFromParent = function(){
  var parent = this.parent;
  var index = _(parent.children).indexOf(this);
  parent.children.splice(index, 1);
  this.parent = null;
};