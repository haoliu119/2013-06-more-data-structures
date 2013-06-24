var makeBinarySearchTree = function(value){
	// this.parent = null;
	this.left = null;
	this.right = null;
	this.value = (value === undefined)? null : value;
};

makeBinarySearchTree.prototype.insert = function(value){
	this.value = (this.value === null)? value : this.value;
	if (this.value !== value){
		var direction = (value < this.value)? "left" : "right";
		if (!this[direction]){
			this[direction] = new makeBinarySearchTree(value);	
		} else {
			this[direction].insert(value);
		}
	}
};

makeBinarySearchTree.prototype.contains = function(value, flag){
	flag = flag || false;
	if (!flag){
		if (this.value === value){
			flag = true;
		}else{
			flag = _([this.left, this.right]).reduce(function(flag, subTree){
				return !subTree ? flag : subTree.contains(value, flag);
			},flag);
		}
	}
	return flag;
};

makeBinarySearchTree.prototype.depthFirstLog = function(func){
	this.value = func(this.value);
	this.left && this.left.depthFirstLog(func);
	this.right && this.right.depthFirstLog(func);
};