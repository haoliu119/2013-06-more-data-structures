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
    // console.log(insertArray);
    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });
    // console.log(binarySearchTree);
    expect(binarySearchTree.value).toEqual(insertArray[0]);
  });

  it(".contains should return true for all value inserted, and false otherwise", function() {
    var insertArray = shuffledNumArray(22);
    // console.log(insertArray);
    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });
    var result = _.map(insertArray,function(number){
      return binarySearchTree.contains(number);
    });
    // console.log(result);
    expect(_.every(result,_.identity)).toEqual(true);
    result = _.map([23,54,21],function(number){
      return binarySearchTree.contains(number);
    });
    expect(_.every(result,_.identity)).toEqual(false);
  });
  // add more tests here to test the functionality of binarySearchTree
});