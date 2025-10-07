// ... (spread operator) em arrays

const arr = [1, 2, 3]
const arr2 = [4, 5, 6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum(1, 2, 3)// arguents.length = 3
sum(arr)// arguents.length = 1
sum([1, 2, 3])// errado

sum(...[1, 2, 3])// certo
sum(...arr)


const arr3 = arr.push(arr2)// errado
console.log(arr3) // 4 (novo tamanho do array arr)
console.log(arr) // [1, 2, 3, [4, 5, 6]]