function method(items) {
    let names = items.map(el => el.name)
    if (names.length == 1) {
        return names[0]
    }

    let commaPart = names.slice(0, names.length - 1).join(', ')
    let lastElement = names[names.length - 1]
    return [commaPart, lastElement].join(' & ')
}
