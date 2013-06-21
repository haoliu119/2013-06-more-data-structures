describe("tree", function() {
  var tree;
  var animals = ['shark', 'dog', 'cat'];

  beforeEach(function() {
    tree = makeTree();
  });

  // it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
  //   expect(tree.addChild).toEqual(jasmine.any(Function));
  //   expect(tree.contains).toEqual(jasmine.any(Function));
  //   expect('value' in tree).toBe(true);
  // });

  // it("the children of an empty tree should be undefined",function(){
  //   expect(tree.children).toEqual(undefined);
  // });

  // it(".addChild should create a child",function(){
  //   tree.addChild('cat');
  //   expect(!!tree.children.length).toBe(true);
  //   expect(tree.children[0].value).toEqual('cat');
  // });

  // it("should adds children", function(){
  //   tree.addChild('shark', 'dog', 'cat');
  //   expect(tree.children.length).toEqual(3);
  // });

  // it("should adds children to children", function(){
  //   tree.addChild('shark', 'bear', 'dog', 'cat');
  //   tree.children[1].addChild('pig', 'bat');
  //   expect(tree.children[1].children[0].value).toEqual('pig');
  // });

  it ('contains should find child at first level of tree', function(){
    tree.addChild('cat');
    expect(tree.contains('cat')).toBe(true);
    expect(tree.contains('pig')).toBe(false);
  });

  it("tree.contains should return true for values that exist in the tree, and false otherwise", function(){
    tree.addChild('shark', 'bear', 'dog', 'cat');
    tree.children[1].addChild('pig', 'bat');
    expect(tree.contains('bat')).toBe(true);
    expect(tree.contains('cat')).toBe(true);
    expect(tree.contains('orchid')).toBe(false);
  });

});