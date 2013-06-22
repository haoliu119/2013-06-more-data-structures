// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

    // .addToHead method ++++++++++


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
    var tempHead = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return tempHead;
  };

  // .removeTail method ++++++++++


  newLinkedList.contains = function(value){
    var recurseContain = function(node){
      return (node.value === value) || !!(node.next && recurseContain(node.next));
      // the previous line is equivalent to the following:
      // if(node.value === value){
      //   return true;
      // } else if (!node.next){
      //   return false;
      // } else {
      //   return recurseContain(node.next);
      // }
    };

    if(!newLinkedList.head){
      return false;
    } else {
      return recurseContain(newLinkedList.head);
    }
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;
  // need new property .previous ++++++++++


  newNode.removeNextNode = function(){
    newNode.next = null; // what if we use this.next?
  };

  return newNode;
};

