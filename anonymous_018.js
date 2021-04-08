reducer = (ac, cur, idx, ar) => ar.length === idx + 1 ? `${ac} & ${cur.name}` : `${ac}, ${cur.name}`
method = arr => arr.reduce(reducer, arr.shift().name)
