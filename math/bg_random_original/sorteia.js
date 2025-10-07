function getRandomNumber(inicio = 0, fim = 10, integer = true) {
    // se for numero inteiro
    if (integer) {
        //inclui o valor maximo do sorteio
        return Math.floor(Math.random() * (fim - inicio + 1)) + inicio
    }
    
    // se for decimal
    return Math.random() * (fim - inicio) + inicio
}

//exemplos de uso
console.log(getRandomNumber(2,5, true)) // número inteiro entre 2 e 5
console.log(getRandomNumber(2,5, false)) 