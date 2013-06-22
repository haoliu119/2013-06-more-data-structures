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
    expect(hashTable.retrieve('zebra')).toEqual('pink');
  });

  it("should work with collisions", function(){
    hashTable.insert('monkey', 'blue');
    hashTable.insert('elephant', 'clear');
    hashTable.insert('zebra', 'stripey');
    expect(_.map(['monkey', 'elephant', 'zebra', 'penguin'], function(item){
      return hashTable.retrieve(item);
    })).toEqual(['blue', 'clear', 'stripey', undefined]);
    // hashTable._storage.display();
  });


// hashTable.insert('monkey', 'clear');
// elephant and monkey both hash to 3

});