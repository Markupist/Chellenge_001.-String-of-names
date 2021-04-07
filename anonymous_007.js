function ConvertNames(names) {
    let lastName = names.pop()
    if (names.length === 0) {
        return lastName;
    }
    return names.map(name => name.name).join(', ') + ' & ' + lastName.name;
}