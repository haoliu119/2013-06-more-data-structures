describe("linkedList", function() {
  var linkedList,
      animals = ['cat', 'dog', 'dolphin'];

  var animalAdder = function(animals, list){
    _(animals).each(function(item){
      list.addToTail(item);
    });
  };

  var randomNumArray = function(index){
    nums = [];
    for(var i = 0; i < index; i++){
      nums.push(Math.floor(Math.random()*100));
    }
    return nums;
  };

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("linkedList.tail should point to the node added after calling addToTail", function() {
    linkedList.addToTail('cat');
    expect(linkedList.tail.value).toEqual('cat');
  });

  it("after adding three nodes, head --> node 1; tail --> node 3", function(){
    animalAdder(animals, linkedList);
    expect(linkedList.tail.value).toEqual('dolphin');
    expect(linkedList.head.value).toEqual('cat');
  });

  it("removeHead should return value of head; head should point to next node", function(){
    animalAdder(animals, linkedList);
    expect(linkedList.removeHead()).toEqual('cat');
    expect(linkedList.head.value).toEqual('dog');
  });

  it("it should contain a value we add and should not contain a value we didn't add", function(){
    linkedList.addToTail('cat');
    expect(linkedList.contains('cat')).toBe(true);
    expect(linkedList.contains('monkey')).toBe(false);
  });

  it("should add to the end of the list", function(){
    var numbers = randomNumArray(4);
    _(numbers).each(function(item){
      linkedList.addToTail(item);
    });
    expect(_(numbers).map(function(number){
      return linkedList.contains(number);
    })).toEqual([true, true, true, true]);
  });

  it("should add to the beginning of the list", function(){
    var numbers = randomNumArray(4);
    _(numbers).each(function(item){
      linkedList.addToHead(item);
    });
    expect(_(numbers).map(function(number){
      return linkedList.contains(number);
    })).toEqual([true, true, true, true]);
  });

  it('.removeHead method should return values removed from list; list should not contain removed values afterwards', function(){
    var numbers = randomNumArray(4);
    _(numbers).each(function(item){
      linkedList.addToTail(item);
    });

    var removeList = numbers.slice(0,2);
    var removeResults = _(removeList).map(function(item){
      return linkedList.removeHead(item);
    });

    expect(removeResults).toEqual(removeList);
    expect(_(numbers).map(function(number){
      return linkedList.contains(number);
    })).toEqual([false, false, true, true]);
  });

  it('.removeTail method should return values removed from list; list should not contain removed values afterwards', function(){
    var numbers = randomNumArray(4);
    _(numbers).each(function(item){
      linkedList.addToHead(item); // addToHead will produce list in reverse order
    });

    var removeList = numbers.slice(0,2);
    var removeResults = _(removeList).map(function(item){
      return linkedList.removeTail(item); // testing removeTail
    });

    expect(removeResults).toEqual(removeList);
    expect(_(numbers).map(function(number){
      return linkedList.contains(number);
    })).toEqual([false, false, true, true]);
  });

});