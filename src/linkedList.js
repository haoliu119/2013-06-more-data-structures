// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var newNode = makeNode(value);
    if(!newLinkedList.head){
      newLinkedList.head = newNode;
    }
    if(newLinkedList.tail){
      newLinkedList.tail.next = newNode;
    }

    newLinkedList.tail = newNode;

  };

  newLinkedList.removeHead = function(){
  };

  newLinkedList.contains = function(){
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
    newNode.next = null; // what if we use this.next?
  };

  return newNode;
};

