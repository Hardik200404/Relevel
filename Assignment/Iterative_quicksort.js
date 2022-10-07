function partition(arr, low, high){
		let temp;
		let pivot = arr[high];
		// index of smaller element
		let i = (low - 1);
		for (let j = low; j <= high - 1; j++) {
			// If current element is smaller
			// than or equal to pivot
			if (arr[j] <= pivot) {
				i++;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		temp = arr[i + 1];
		arr[i + 1] = arr[high];
		arr[high] = temp;

		return i + 1;
	}

	/* A[] --> Array to be sorted,
	l --> Starting index,
	h --> Ending index */
function quickSortIterative(arr, l, h){
		// Create an auxiliary stack
		let stack = new Array(h - l + 1);
		stack.fill(0);
		// initialize top of stack
		let top = -1;
		// push initial values of l and h to stack
		stack[++top] = l;
		stack[++top] = h;

		// Keep popping from stack while it is not empty
		while (top >= 0) {
			h = stack[top--];
			l = stack[top--];

			// Set pivot element at its
			// correct position in
			// sorted array
			let p = partition(arr, l, h);

			// If there are elements on
			// left side of pivot, then
			// push left side to stack
			if (p - 1 > l) {
				stack[++top] = l;
				stack[++top] = p - 1;
			}

			// If there are elements on
			// right side of pivot, then
			// push right side to stack
			if (p + 1 < h) {
				stack[++top] = p + 1;
				stack[++top] = h;
			}
		}
	}
	
let arr = [3, 6, 5, 2, 10];
quickSortIterative(arr, 0, arr.length-1);
console.log(arr);
