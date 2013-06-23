var makeBinarySearchTree = function(value){
	// this.parent = null;
	this.left = null;
	this.right = null;
	this.value = value || null;
};

makeBinarySearchTree.prototype.insert = function(value){
	this.value = this.value || value;
	if (this.value !== value){
		var direction = (value < this.value)? "left" : "right";
		if (!this[direction]){
			this[direction] = new makeBinarySearchTree(value);	
		} else {
			this[direction].insert(value);
		}
	}
};

makeBinarySearchTree.prototype.contains = function(value){

};

makeBinarySearchTree.prototype.depthFirstLog = function(value){

};