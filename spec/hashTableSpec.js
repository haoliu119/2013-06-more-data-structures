describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert', 'retrieve', and 'remove'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should add a key-value pair to the array", function(){
    hashTable.insert('zebra', 'pink');
    hashTable._storage.display();
    expect().toEqual(0);
  });
});