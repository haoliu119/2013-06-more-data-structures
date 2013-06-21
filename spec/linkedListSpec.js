describe("linkedList", function() {
  var linkedList,
      animals = ['cat', 'dog', 'dolphin'];

  var animalAdder = function(animals, list){
    _(animals).each(function(item){
      list.addToTail(item);
    });
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

  it("it should contain values from linked nodes", function(){
    animalAdder(animals, linkedList);
    expect(linkedList.contains('cat')).toBe(true);
    expect(linkedList.contains('dog')).toBe(true);
    expect(linkedList.contains('monkey')).toBe(false);
  });

  // add more tests here to test the functionality of linkedList
});