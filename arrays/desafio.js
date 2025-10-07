function sum(){
    //const numbers = Array.from(arguments)
    const numbers = [...arguments]
    console.log(numbers)
    console.log(numbers.reduce)
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}
function avarege(){
    return 0
}
let soma = sum(1, 2, 3, 4, 5)
console.log(soma)