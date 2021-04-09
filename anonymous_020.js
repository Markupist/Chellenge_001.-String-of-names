function method(arr) {
    const names = a.map(v => v.name)
    const last = names.splice(-2, 2).join(" & ")
    return [...names, last].join(", ")
}