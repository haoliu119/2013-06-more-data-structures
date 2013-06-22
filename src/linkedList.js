var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  // .addToHead method ++++++++++
  // var newHead = call makeNode with value
  // if this.head is null,
  //    point this.head to newHead,
  //    also point this.tail to newHead
  // else
  //    point this.head.previous to newHead
  //    newHead.next points to this.head
  //    repoint head to newHead

  newLinkedList.addToHead = function(value){
    var newHead = makeNode(value);
    if (!this.head){
      this.head = this.tail = newHead;
    } else {
      this.head.previous = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
  };

  // refactor addToTail: make .previous point to previous node
  // var newTail = call makeNode with value
  // if this.tail is null,
  //    point this.tail to newTail
  //    point this.head to newTail
  // else
  //    point this.tail.next to newTail
  //    newTail.previous to this.tail
  //    repoint tail to newTail

  newLinkedList.addtoTail = function(value){
    var newTail = makeNode(value);
    if(!this.tail){
      this.head = this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.previous = this.tail;
      this.tail = newTail;
    }
  };

  // refactor .removeHead: disconnect removed node from the new head
  // var tempHead = this.head;
  // repoint head to tempHead.next
  // point this.head.previous to null
  // return tempHead.value

  newLinkedList.removeHead = function(){
    var tempHead = this.head;
    this.head = tempHead.next;
    this.head.previous = null;
    return tempHead.value;
  };

  // .removeTail method ++++++++++
    // save current tail node into a tempTail
    // repoint tail to tempTail.previous
    // this.tail.next = null;
    // return tempTail.value

    newLinkedList.removeTail = function(){
      var tempTail = this.tail;
      this.tail = tempTail.previous;
      this.tail.next = null;
      return tempTail.value;
    };

  // contains should work with doubly linked list as it's coded
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
  newNode.previous = null;

  newNode.removeNextNode = function(){
    newNode.next = null; // what if we use this.next?
  };

  return newNode;
};

