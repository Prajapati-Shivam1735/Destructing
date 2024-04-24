function findMaxMin(arr) {
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    return { max, min };
}

const numbers = [5, 2, 7, 1, 9];
const result = findMaxMin(numbers);
console.log(result); 
