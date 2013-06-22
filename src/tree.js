var makeTree = function(value, parent){
  var newTree = {};

  newTree.value = value || undefined;
  newTree.children = undefined;
  // add .parent property
  newTree.parent = parent || null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// refactor .addChild to incorporate .parent property
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

// add .removeFromParent method
// 