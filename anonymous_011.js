function method(items) {
    const itemsLen = items.length

    return items.reduce((prev, curr, ind) => {
        let temp = prev + curr.name

        if (ind < itemsLen - 2) temp += ", "
        else if (ind == itemsLen - 2) temp += " & "

        return temp
    }, "")
}