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
    // hashTable._storage.display();
    expect().toEqual(0);
  });

  it("should work with collisions", function(){
    hashTable.insert('monkey', 'blue');
    hashTable.insert('elephant', 'clear');
    hashTable.insert('monkey', 'clear');
    expect().toEqual(0);
    hashTable._storage.display();
  });

// elephant and monkey both hash to 3

});