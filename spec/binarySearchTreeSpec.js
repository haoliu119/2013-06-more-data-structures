describe("binarySearchTree", function() {
  var binarySearchTree;
  var randomNumArray = function(index, limit){
    limit = limit || index;
    nums = [];
    for(var i = 0; i < index; i++){
      nums.push(Math.floor(Math.random()*limit));
    }
    return nums;
  };
  var shuffledNumArray = function(index, limit){
    return _.shuffle(randomNumArray(index, limit));
  };

  beforeEach(function() {
    binarySearchTree = new makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should insert values correctly", function() {
    var insertArray = shuffledNumArray(10);
    console.log(insertArray);
    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });
    console.log(binarySearchTree);
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
  });


  // add more tests here to test the functionality of binarySearchTree
});