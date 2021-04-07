method = (arr) => arr.slice(0, -1).map(v => v.name).join(', ') + giveLastSeparator(arr) + arr[arr.length - 1].name
const giveLastSeparator = (arr) => arr.length > 1 ? ' & ' : ''
