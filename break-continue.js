
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers1.length; i++) {
    // console.log(numbers1[i]);
    if(numbers1[i] > 3) {
        break;
    }
    console.log(numbers1[i]);
}
const numbers = [1, -2, 3, 4, -5, -6, 7, 8, -9];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}
    
