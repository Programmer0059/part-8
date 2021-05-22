const studs = [
    {name: 'MR Baker', id: 99},
    {name: 'Presley', id: 09},
    {name: 'John', id: 10},
    {name: 'John Smith', id: 11},
];
// let name2 = [];
// for (let i = 0; i < studs.length; i++) {
//     const name = studs[i].name;
//     name2.push(name);
// }
// console.log(name2);

const result = studs.map(s => s.name);
console.log(result);

const result2 = studs.filter(a => a.id > 10);
console.log(result2);