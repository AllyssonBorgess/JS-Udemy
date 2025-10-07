let arr = [1, 2, 3]
console.log(arr.reverse())// [3, 2, 1]

let soma = arr.reduce(function(acumulador, atual){
    return acumulador + atual
})
console.log(soma) // 6
console.log(arr) // [3, 2, 1]