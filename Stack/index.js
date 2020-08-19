/*
 * 使用逆波兰法计算四则运算
*/
function initStack(str) {
	var strArr = str.split('');
	var initStack = [];
	const length = strArr.length;
	while(strArr.length >0) {
		initStack.push(filterNum(strArr));
	}
	return initStack;
}

function filterNum(arr) { // 递归查找串中的数字
	var sign = ['+', '-', '*', '/', '(', ')'];
    if (arr.length == 1) {
		return arr.shift();
	}
	if (sign.indexOf(arr[1]) > -1 || sign.indexOf(arr[0]) > -1) {
		return arr.shift();
	}
	return arr.shift() + arguments.callee(arr);
}

function toBDZ(str) { // 转后缀表达
	var stack = [];
	var rawStack = initStack(str);
	var result = [];
	var sign = ['+', '-', '*', '/', '(', ')'];
	var sign2 = ['+', '-', '*', '/'];
	while(rawStack.length > 0) {
		var top = rawStack.shift();
		if (sign.indexOf(top) == -1) { // 是数字就输出
			result.push(top);
			continue;
		}
		if (top == '(') { // 直接进栈
			stack.push(top);
			continue;
		}
		if (sign2.indexOf(top) > -1) { // 是计算符号
			if (stack.length == 0 || stack[stack.length-1] == '(') { // 空栈\栈顶是(直接进栈
				stack.push(top);
				continue;
			}
			let yxjStackTop = sign2.indexOf(stack[stack.length-1]) > 1 ? 1 : 0; // 栈顶符号优先级
			let yxjTop = sign2.indexOf(top) > 1 ? 1 : 0; // 准备进栈的符号优先级
			if (yxjStackTop > yxjTop) { // 栈顶符号优先级大于要进栈的符号，栈顶符号依次出栈，当前符号进栈
				while(stack.length > 0) { // 全部出栈
					result.push(stack.pop());
				}
				stack.push(top); // 当前符号进栈
			} else { // 否则，当前符号直接进栈
				stack.push(top);
			}
		}
		if (top == ')') { // 按顺序出栈，一直出到（
			var tt = stack.pop();
			while(tt != '(') {
				result.push(tt);
				tt = stack.pop();
			}
		}
	}
	while(stack.length > 0) { // 剩余的全部出栈
		result.push(stack.pop());
	}
	return result;
}

function fourOperations(BDZ) {
	var stack = [];
	var sign = ['+', '-', '*', '/'];
	while(BDZ.length > 0) {
		var top = BDZ.shift();
		if (sign.indexOf(top) == -1) { // 是数字，直接进栈
			stack.push(top);
		} else { // 不是数字，可能是+-*/，需要两个运算数
			var N2 = parseFloat(stack.pop()); // 第二个运算数
			var N1 = parseFloat(stack.pop()); // 第一个运算数
			var N;
			switch (top) {
				case '+':
					N=N1+N2;
					break;
				case '-':
					N=N1-N2;
					break;
				case '*':
					N=N1*N2;
					break;
				case '/':
					N=N1/N2;
					break;
				default:
					break;
			}
			stack.push(N);
		}
	}
	return stack.pop();
}
function demo(str) {
	console.log(str,'= ');
	var bdz = toBDZ(str);
	return fourOperations(bdz);
}
// console.log('9+(3-1)*3+10/2 ===> ', toBDZ('9+(3-1)*3+10/2').join(' '));
console.log(demo('1+(10*5)+10/2'));





