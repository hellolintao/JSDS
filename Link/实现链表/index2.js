/*
 * 循环链表
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
		this.head.next = this.head;
	}
	listEmpty() { // 判断链表是否空的
		var currNode = this.head;
		if (currNode.next != currNode) {
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
		while(currNode.element != item && currNode.next != this.head) {
			currNode = currNode.next;
		}
		return item == currNode.element ? currNode : null;
	}
	findPrevious(item) {
		var currNode = this.head;
		while( !(currNode.next == null) && currNode.next.element != item && currNode.next != this.head) { // 如果下一个节点不是null && 下一个节点的元素不是item
			currNode = currNode.next;
		}
		return currNode.next.element == item ? currNode : null;
	}
	insert(newElement, item) { // 在链表中item后面插入newElement
		var newEle = new Node(newElement);
		var currentNode = this.find(item);
		newEle.next = currentNode.next;
		currentNode.next = newEle;
	}
	remove(item) { // 移除
		var prevNode = this.findPrevious(item);
		if (prevNode.next != null) {
			prevNode.next = prevNode.next.next;
		}
	}
	edit(item, newItem) { // 编辑
		var node = this.find(item);
		node.element = newItem;
	}
	display() { // 显示
		var currNode = this.head;
		var i =0;
		while(currNode.next != this.head) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}


var names = new LList();
console.log(names.listEmpty());
names.insert('lintao', 'head');
names.insert('wh', 'lintao');
names.insert('zjd', 'wh');
console.log(names);
console.log('---', names.find('lintao'));
console.log('***', names.findPrevious('head'));
console.log('===', names.find('lintao'));
// names.remove('lintao');
console.log('===', names.find('lintao'));
console.log('***', names.findPrevious('lintao'));
console.log('***', names.findPrevious('head'));
// names.clearList();


console.log('^^^^^^^');
console.log(names);
console.log(names.display());











