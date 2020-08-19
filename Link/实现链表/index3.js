// 双向链表
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}
}
class LList {
	constructor() {
		this.head = new Node('head');
		this.head.next = null;
		this.head.prev = null;	
	}
	listEmpty() {
		return this.head.next ? false : true;
	}
	clearList() {
		this.head.next = null;
	}
	find(item) {
		var currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}
	findPrevious(item) {
		return this.find(item).prev;
	}
	insert(newElement, item) {
		var newNode = new Node(newElement);
		var currNode = this.find(item);
		newNode.next = currNode.next;
		newNode.prev = currNode;
		currNode.next = newNode;
	}
	display() {
		var currNode = this.head;
		while(currNode.next) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
	remove(item) {
		var prevNode = this.findPrevious(item);
		var nexNode = this.find(item).next;
		prevNode.next = nexNode;
		nexNode.prev = prevNode;
	}
}

var names = new LList();
names.insert('lintao', 'head');
names.insert('wh', 'lintao');
names.insert('zjd', 'wh');
names.insert('gym', 'zjd');
names.display();
console.log('---');
names.remove('wh');
console.log(names.findPrevious('zjd'));
names.display();