function method(arr) {
    let names = arr
        .map((i) => i.name)
        .reverse()
        .join('  ,   ')
        .replace(',', '&')
        .split('  ')
        .reverse()
        .join('')
        .replace('&', '&')
    return names;
}

