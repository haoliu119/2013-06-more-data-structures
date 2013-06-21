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
    var tempHead = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return tempHead;
  };

  newLinkedList.contains = function(value){
    //base case:
    var contain = function(node){
      console.log("node: " + node);
      if(node.value === value){
        return true;
      } else if (!node.next){
        return false;
      } else {
        contain(node.next);
      }
      // return node.value === value;
    };

    if(!newLinkedList.head){
      return false;
    } else {
      return contain(newLinkedList.head);
    }
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

