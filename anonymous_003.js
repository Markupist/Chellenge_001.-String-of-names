const func = (arr) => arr
    .map(({ name: n }, ind) => ind === 0 ? n : ind === arr.length - 1 ? ` & ${n}` : `, ${n}`).join('')

const t1 = [{ name: 'Bart' }]
const t2 = [{ name: 'Bart' }, { name: 'Lisa' }]
const t3 = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]
const t4 = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Masha' }]

console.log(func(t1))
console.log(func(t2))
console.log(func(t3))
console.log(func(t4))