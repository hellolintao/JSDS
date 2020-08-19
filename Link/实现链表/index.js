/*
 * 简单链表
*/
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LList {
	constructor() { // InitList
		this.head = new Node('head');
	}
	listEmpty() { // 判断链表是否空的
		var currNode = this.head;
		if (currNode.next) {
			return false;
		} else {
			return true;
		}
	}
	clearList() { // clearList
		var currNode = this.head;
		currNode.next = null;
	}
	find(item) { // 查找 GetElem
		var currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}
	findPrevious(item) {
		var currNode = this.head;
		while( !(currNode.next == null) && currNode.next.element != item) { // 如果下一个节点不是null && 下一个节点的元素不是item
			currNode = currNode.next;
		}
		return currNode;
	}
	insert(newElement, item) { // 在链表中item后面插入newElement
		var newEle = new Node(newElement);
		var currentNode = this.find(item);
		newEle.next = currentNode.next;
		currentNode.next = newEle;
	}
	remove(item) {
		var prevNode = this.findPrevious(item);
		if (prevNode.next != null) {
			prevNode.next = prevNode.next.next;
		}
	}
	edit(item, newItem) {
		var node = this.find(item);
		node.element = newItem;
	}
	display() {
		var currNode = this.head;
		while(currNode.next) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}


var names = new LList();
names.insert('lintao', 'head');
names.insert('zjd', 'lintao');
names.insert('wh', 'zjd');
names.display();

console.log('*****');
names.remove('zjd');
names.display();

console.log('-----');
names.insert('zjd', 'lintao');
names.edit('lintao', 'lintaoppppp');
names.display();

console.log('*****');