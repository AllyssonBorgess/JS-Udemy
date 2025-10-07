let numero = 1234567.890

console.log(numero.toFixed(2)) // Arredonda para 2 casas decimais
console.log(typeof numero.toFixed(2)) // Retorna uma string

console.log(numero.toPrecision(7)) // Retorna com 7 dígitos de precisão
console.log(typeof numero.toPrecision(7)) // Retorna uma string

console.log((123).toPrecision(6))

numero = 12.34567
console.log(numero.toExponential()) // Retorna em notação exponencial com 4 casas decimais
console.log(numero.toExponential(4)) // Retorna em notação exponencial com 4 casas decimais

numero = 15
console.log(numero.toString(2)) // Converte para binário
console.log(typeof numero.toString(2)) // Retorna uma string

// 0- 0, 1 - 1, 2 - 10, 3 - 11

console.log((0).toString(2))
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
console.log((5).toString(2))
console.log((6).toString(2))
console.log((7).toString(2))
console.log((8).toString(2))
console.log((9).toString(2))
console.log((10).toString(2))

// 10 - a, 11 - b, 12 - c, 13 - d, 14 - e, 15 - f

console.log((10).toString(16))
console.log((11).toString(16))
console.log((12).toString(16))
console.log((13).toString(16))
console.log((14).toString(16))
console.log((15).toString(16))

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR" , { style: "currency", currency: "BRL" }))
console.log(numero.toLocaleString("pt-BR" , { style: "currency", currency: "EUR" }))

console.log(Number.MAX_VALUE, Number.MIN_VALUE)

let numeroAsString = "a3.456"
console.log(isNaN(numeroAsString)) // Verifica se não é um número
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString)) // Converte para número de ponto flutuante
