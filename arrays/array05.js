let arr = [1, 3, 5, 7, 9]

let teste = arr.push(11, 13, true, "ola mundo") // adiciona no final
console.log(teste)
console.log(arr)

let ultimoItem = arr.pop() // remove o ultimo item
console.log(ultimoItem)
console.log(arr)

let primeiroItem = arr.shift() // remove o primeiro item
console.log(primeiroItem)
console.log(arr)

let novoTamanho = arr.unshift("novo item no inicio") // adiciona no inicio
console.log(novoTamanho)
console.log(arr)

let arr2 = arr.slice(2, 4) // novo array a partir do original (do indice 2 ao 4, sem incluir o 4)
console.log(arr2)
console.log(arr)

arr.splice(2, 0, "item1", "item2") // a partir do indice 2, remove 0 itens e adiciona item1 e item2
console.log(arr)