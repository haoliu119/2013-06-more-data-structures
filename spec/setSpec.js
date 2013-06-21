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
    expect(set.contains('Toyota')).toBe(true);
  });

  it("should be able to add a function", function(){
    var func1 = function(x){return 2*x;};
    var func2 = function(x){return 2*x;};
    set.add(func1);
    expect(set.contains(func1)).toBe(true);
    expect(set.contains(function(x){return 2*x;})).toBe(true);
  });

  it("shouldn't add a value if it's already in the set", function(){
    set.add('Miata');
    set.add('Miata');
    expect(set._storage.length).toEqual(1);
  });


  //
  //
  //

});