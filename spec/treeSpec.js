describe("tree", function() {
  var tree;
  var animals = ['shark', 'dog', 'cat'];

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("the children of an empty tree should be undefined",function(){
    expect(tree.children).toEqual(undefined);
  });

  it(".addChild should create a child",function(){
    tree.addChild('cat');
    expect(!!tree.children.length).toBe(true);
    expect(tree.children[0].value).toEqual('cat');
  });

  it("should add children to children", function(){
    tree.addChild('shark', 'dog', 'cat');
  expect(tree.children.length).toEqual(3);
  });

});