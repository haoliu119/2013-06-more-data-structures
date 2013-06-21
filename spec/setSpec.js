describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("an empty set should contain nothing i.e. undefined", function(){
    expect(set.contains()).toBe(false);
  });

  it("should be able to add a string to the set", function(){
    set.add('Toyota');
    console.log(set._storage);
    expect(set.contains('Toyota')).toBe(true);
  });
  //
  //
  //

});