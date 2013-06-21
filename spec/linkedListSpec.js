describe("linkedList", function() {
  var linkedList;

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
    linkedList.addToTail('cat');
    linkedList.addToTail('dog');
    linkedList.addToTail('dolphin');
    expect(linkedList.tail.value).toEqual('dolphin');
    expect(linkedList.head.value).toEqual('cat');
  });

  // add more tests here to test the functionality of linkedList
});