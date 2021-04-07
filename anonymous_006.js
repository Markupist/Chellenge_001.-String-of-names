function method(array) {
    let ar = [];
    array.forEach(item => ar.push(item.name));
    if (array.length >= 3) {
        ar.splice(length - 1, 1, " & ");
        ar.push(array[array.length - 1].name);
        console.log(ar)
        let newar = ar.slice(0, ar.length - 3).join(", ").split();
        let str = newar.concat(` ${ar[ar.length - 3]} & ${ar[ar.length - 1]}`).join();
        return str;
    } else if (array.length == 2) {
        return ar.join(" & ");
    } else {
        return ar.join();
    };
};

