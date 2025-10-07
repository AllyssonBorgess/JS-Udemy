let str1 = "Minha string"
console.log(str1.replace("i", "o")) // substitui o primeiro "i" por "o"
console.log(str1)

//str1.indexOf("string") // retorna o índice onde começa a palavra "string"
//console.log(str1.indexOf("asdadasdasd"))
// retorna -1 pq não existe essa palavra na string
//console.log(str1.includes("Minha")) // retorna true pq a palavra existe na string
//console.log(str1.indexOf("Minha")) // retorna 0 pq a palavra começa no índice 0
//console.log(str1.indexOf("minha") >= 0) // retorna false pq a palavra começa com letra minúscula


console.log(str1.slice(2, 5)) // retorna "Minha", do índice 2 ao 5 (5 não incluso)
console.log(str1.substring(2, 5)) // retorna "inha", do índice 2 ao 5 (5 não incluso)


console.log(str1.slice(-5, -2)) // retorna "tri", do índice -5 ao -2 (contagem de trás pra frente, -2 não incluso)
console.log(str1.substring(2, 5)) // retorna "inha", do índice 2 ao 5 (5 não incluso)


console.log(str1.toLowerCase()) // retorna "minha string"
console.log(str1.toUpperCase()) // retorna "MINHA STRING"
console.log(str1)


let strAsObj = new String("Minha string como objeto")
console.log(strAsObj.valueOf()) // retorna "Minha string como objeto"
console.log(strAsObj) // retorna [String: 'Minha string como objeto']
console.log(strAsObj.toString()) // retorna "Minha string como objeto"


str1 = "      " + str1 + "      "
console.log(str1) // retorna "      Minha string      "
console.log(str1.trim()) // retorna "Minha string"
console.log(str1.trimStart()) // retorna "Minha string      "
console.log(str1.trimEnd()) // retorna "      Minha string"


str1 = "0123456789"
console.log(str1.padStart(20, "*")) // retorna "*****0123456789"
console.log(str1.padEnd(20, "*").length) // retorna "0123456789*****"


let telefone1 = "98765-4321" // "9****-4321"
let telefone2 = "8765-4321" // "8****-4321"
function mascaraTelefone(numero) {
    let hifemPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)
    console.log(numeroInicio, numeroFinal)
}
mascaraTelefone(telefone1)
mascaraTelefone(telefone2)


let str2 = "Hoje é quarta-feira"
console.log(str2.startsWith("Hoje")) // true
console.log(str2.endsWith("hoje")) // true


let srt3 = "abcdefgh"
console.log(srt3.charAt(3)) // retorna "d", caractere na posição 3
console.log(srt3.charCodeAt(3)) // retorna 100, código do caractere na posição 3

/*
replace()    
indexOF()
slice()
toLowerCase()
valueof()
trim ()
padStart()
startsWith()
charAT ()
replaceAll() ***
lastIndexOf()
substring()
toUpperCase()
trimEnd()
padEnd()
endsWith()
charCodeAt()
includes()
split ()
trimStart()
length () */