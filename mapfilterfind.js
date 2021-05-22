const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.map(x => x * x);
console.log(result);

const res2 = numbers.filter(x => x > 5);
console.log(res2);

const res3 = numbers.find(x => x < 4);
console.log(res3);