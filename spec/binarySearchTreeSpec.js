describe("binarySearchTree", function() {
  var binarySearchTree;
  var randomNumArray = function(index, limit){
    limit = limit || index;
    var nums = [];
    for(var i = 0; i < index; i++){
      nums.push(Math.floor(Math.random()*limit));
    }
    return nums;
  };
  var orderedNumArray = function(limit){
    var nums = [];
    for(var i=0; i < limit; i++){
      nums.push(i);
    }
    return nums;
  };
  var shuffledNumArray = function(limit){
    return _.shuffle(orderedNumArray(limit));
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

    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });

    expect(binarySearchTree.contains(insertArray[Math.floor(Math.random()*10)])).toBe(true);
  });

  it(".contains should return true for all value inserted, and false otherwise", function() {
    var insertArray = shuffledNumArray(10);
    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });
    var result = _.map(insertArray,function(number){
      return binarySearchTree.contains(number);
    });
    expect(_.every(result,_.identity)).toEqual(true);

    result = _.map([23,54,21],function(number){
      return binarySearchTree.contains(number);
    });
    expect(_.every(result,_.identity)).toEqual(false);
  });

  it('.depthFirstLog should accepts a callback and executes it on every value contained in the tree', function(){
    var func = function(value){
      return value * 2;
    };
    var insertArray = shuffledNumArray(10);
    _.each(insertArray, function(number){
      binarySearchTree.insert(number);
    });

    binarySearchTree.depthFirstLog(func);
    var resultArray = _.map(insertArray, func);

    var containsResult = _.map(resultArray,function(number){
      return binarySearchTree.contains(number);
    });
    expect(_.every(containsResult,_.identity)).toEqual(true);
  });
  // add more tests here to test the functionality of binarySearchTree
});