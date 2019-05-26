function gram(str1, str2) {

	if(str1.length !== str2.length) {
		return false;
	}

	const str1Obj = {};
	const str2Obj = {};

	for (let char of str1.toLowerCase().split('')) {
		str1Obj[char] = (str1Obj[char] + 1) || 1;
	}

	for (let char of str2.toLowerCase().split('')) {
		str2Obj[char] = (str2Obj[char] + 1) || 1;
	}

	for (let char in str1Obj) {
		if(str2Obj[char] !== str1Obj[char]) {
			return false;
		}
	}

	return true;
}

//console.log(gram('icecream', 'creamice'));


function uniqueValues(...arr) {
	const lookUp = {};

	for (let value of arr) {
		lookUp[value] = (lookUp[value] + 1) || 1
	}

	for (let char in lookUp) {
		if(lookUp[char] > 1) {
			delete lookUp[char];
		}
	}

	return Object.keys(lookUp);
}

function uniqueValues2(...arr) {
	const values = new Set();

	arr.forEach(value => values.add(value));

	return [...values].length;// new Array(...values).length;
}

// console.log(uniqueValues2(-1, 2, -2, 3, 0, 1, 1, 1));


function checkOdds(arr = []) {
	if(arr.length <= 0) return null;

	if(arr[0] % 2 === 1) {
		return true;
	} 

	if(arr.length === 1 && arr[0] % 2 === 0) {
		return false;
	}

	arr = arr.slice(1);
	return checkOdds(arr);
	
}

// console.log(checkOdds([2, 4, 2, 8, 4, 2]));


function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === value) return i;
	}

	return -1
}

// console.log(linearSearch(['gift', 'loren', 'stein', 'bato'], 'stein'));


function binarySearch(arr, value) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while(arr[middle] !== value && start <= end) {
		if(value < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return (arr[middle] === value) ? middle : -1;
}

// console.log(binarySearch(['apple', 'ball', 'cat', 'dog', 'fish', 'girl', 'house'], 'girl'));


function naiveSearch(long, short) {
	let count = 0;

	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if(short[j] !== long[i + j]) break;
			if(j === short.length - 1) count++;
		}
	}

	return count;
}

//console.log(naiveSearch('boom boom lol fan!', 'o'));


function bubbleSort(arr) {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	}

	let noSwap;

	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwap = false;
			}
		}
		if(noSwap) break;
	}

	return arr;
}

//console.log(bubbleSort([4, 3, 2, 6, 7, 5, 1]));


function selectionSort(arr) {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	}

	for (let i = 0; i < arr.length; i++) {
		let smallest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[smallest]) {
				smallest = j;
			}
		}
		if( i !== smallest) swap(arr, i, smallest);
	}

	return arr;
}

// console.log(selectionSort([3, 6, 8, 6, 2, 1]));

function insertionSort(arr) {

	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentValue;

	}

	return arr;
}

// console.log(insertionSort([3, 6, 8, 6, 2, 1]));

// MERGE SORT IMPLEMENTATION
// FIR WRITE THE merge arrays implementation

function mergeArrays(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while(i < arr1.length && j < arr2.length) {
		if(arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while(i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while(j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

// console.log(mergeArrays([99,], [3, 4, 5]));

function mergeSort(arr) {
	if(arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return mergeArrays(left, right);
}

//console.log(mergeSort([12, 13, 45, 50 ,99, 1]));


function pivot(arr, start=0, end=arr.length-1) {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	}

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length + 1; i++) {
		if(pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left=0, right=arr.length-1) {
	if(left < right) {
		const pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right 
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
}

console.log(quickSort([12, -13, 45, 50 , 99, 1]));