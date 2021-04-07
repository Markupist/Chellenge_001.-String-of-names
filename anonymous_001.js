const inComma = list => list.join(', ')
const names = list => list.map(item => item.name)

function format(list) {
    const last = list.pop()
    if (list.length) {
        return `${inComma(list)} & ${last}`
    }
    return last
}

const method = list => format(names(list))
