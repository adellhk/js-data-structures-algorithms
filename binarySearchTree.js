function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	return this;
};

Node.prototype.insert = function(newNode) {
	if (newNode.value < this.value) {
		if (this.left === null) {
			this.left = newNode;
		} else {
			this.left.insert(newNode);
		}
	} else if (newNode.value > this.value) {
		if (this.right === null) {
			this.right = newNode;
		} else {
			this.right.insert(newNode);
		}
	} else {
		throw "Nodes cannot have duplicate values."
	}
};

function BinarySearchTree(insert) {
	if (insert instanceof Node) {
		this.root = insert;
	} else {
	  this.root = new Node(insert);
	}
	return this;
};

BinarySearchTree.prototype.insert = function(insert) {
	if (insert instanceof Node) {
		this.root.insert(insert);
	} else {
		this.root.insert(new Node(insert));
	}
};

BinarySearchTree.prototype.simpleTree = function(inserts) {
	for (insert in inserts) {
		this.root.insert(new Node(inserts[insert]));
	}
};

BinarySearchTree.prototype.balancedTree = function(inserts) {
	var middleIndex = Math.floor( (inserts.length - 1 ) / 2);
	var middleInsert = inserts[middleIndex];
	for (insert in inserts) {
		this.root.insert(new Node)
	}
};
// var myNode = new Node(3);
// console.log(myNode.value === 3);
// console.log(myNode.left === null);

bst = new BinarySearchTree(1);
console.log(bst)
bst.insert(2)
bst.simpleTree([4,5,6])