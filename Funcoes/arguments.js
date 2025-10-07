function somar () {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar([1, 2, 3])); // 15
console.log(somar(1, 2, 3, 4, 5)); // 15
console.log(somar(50, 50, 50, 50, 50, 50)); // 300