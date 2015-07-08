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
	} else if (insert instanceof Array) {
		this.balancedTree(insert);
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

/*
balancedTree
until inserts are only 1
assign value of current node to middle (1,2,3,4,5) #=> 3
assign right to return of right-split(4,5) #=> 4
	right-split:
	until inserts are only 1
	assign
assign left to return of left-split(1,2) #=> 1
*/
BinarySearchTree.prototype.balancedTree = function(inserts) {
	var middleIndex = Math.floor((inserts.length - 1 ) / 2);
	var middleInsert = inserts[middleIndex];
	if (this.root === undefined) {
		this.root = new Node(middleInsert);
	};
	if (inserts.length > 1) {
		var leftInserts = inserts.slice(0, middleIndex);
		var rightInserts = inserts.slice(middleIndex + 1, inserts.length);

		if (leftInserts.length > 0) {
			this.root.left = new Node( this.balancedTree(leftInserts) );
		};

		if (rightInserts.length > 0) {
			this.root.right = new Node( this.balancedTree(rightInserts) );
		};
		
	} else {
		console.log(middleInsert);
	};
	return middleInsert;
};

// BinarySearchTree.prototype.balancedBranch = function(inserts) {
// 	if (inserts.length > 1) {
// 		var middleIndex = Math.floor((inserts.length - 1) / 2);
// 		var middleInsert = inserts[middleIndex];
// 		var leftInserts = inserts.slice(0, middleIndex);
// 		var rightInserts = inserts.slice(middleIndex + 1, inserts.length);

// 		this.left.insert(new Node( this.balancedBranch(leftInserts) ));
// 		this.right.insert(new Node( this.balancedBranch(rightInserts) ));
		
// 		return middleInsert;
// 	} else {
// 		return inserts[0];
// 	}
// };
// var myNode = new Node(3);
// console.log(myNode.value === 3);
// console.log(myNode.left === null);

bst = new BinarySearchTree(1);
console.log(bst);
bst.insert(2);
// bst.simpleTree([4,5,6])
balancedBst = new BinarySearchTree([3,4,5,6]);
console.log(balancedBst);