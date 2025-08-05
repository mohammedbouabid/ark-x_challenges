// Task 1
const sum=(numbers)=>{
    let somme = 0;
    for(let i = 0;i<numbers.length;i++){
        somme += numbers[i]
    }
    return somme;
}
console.log(sum([4, 2, 7]));

const countEven = (arr) => {
  let count = 0;
  for (let i=0;i<arr.length;i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countEven([10, 15, 22, 33, 40, 55, 60, 98 , 34]));

const double = (numbers) =>{
    for(let i =0; i<numbers.length; i++){
        numbers[i]=numbers[i]*2
    }
    return numbers;
}
console.log(double([4, 2, 7]));

// Task 2 - Socks Challenge
const sockMerchant = (arr) => {
  arr.sort((a, b) => a - b); 
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i++; 
    }
  }

  return count;
};
console.log(sockMerchant([1, 1, 3, 1, 4, 4, 2, 2, 2]))

/* Sort & Search */

// Bubble Sort
function bubbleSort(arr){
let temp = null;
let countI = 0;
let countJ = 0;
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
                countJ++;
        }
        countI++;
    }
    console.log(countI);
    console.log(countJ);
    return arr;
}

// Select Sort
function selectionSort(arr){

    for(let i = 0; i < arr.length - 1 ; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Insert Sort
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        
        let j;
        for(j = i - 1; j >= 0 && arr[j] > current; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return null;
}

// Binary Search
function binarySearch(arr, target) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex; // found
    } else if (arr[midIndex] < target) {
      lowIndex = midIndex + 1; // search right half
    } else {
      highIndex = midIndex - 1; // search left half
    }
  }
  return null; // not found
}

// Example usage:

const arr = [3,8,1,5,4];
console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));

const numbers = [1, 3, 5, 7, 9, 11];
console.log(linearSearch(numbers, 11)); // Output: 5
console.log(binarySearch(numbers, 7)); // Output: 3