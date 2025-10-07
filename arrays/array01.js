const arr = [1, 5, 10, "Ola", true];

let sohNumeros = arr.some(function(el){
    console.log(el)
    return typeof el === 'number' && el >= 20
})

arr.filter(function(el, i, _arr){
    console.log(el, i, _arr)
    return true
})

const arr2 = arr.forEach(function(el, i, _arr){
    console.log(el, i)
})

arr1.map(function(el, i, _arr){
    return el * el
})

console.log(sohNumeros) // false
console.log(arr2) // undefined