const method = (arr) => arr
    .map(({ name: n }, ind) => ind === 0 ? n : ind === arr.length - 1 ? ` & ${n}` : `, ${n}`).join('')
