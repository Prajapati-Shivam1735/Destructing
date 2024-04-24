function removeDuplicates(arr) {
    return new Set(arr);
}

const numbers = [1, 2, 3, 4, 2, 3, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log([...uniqueNumbers]); 
