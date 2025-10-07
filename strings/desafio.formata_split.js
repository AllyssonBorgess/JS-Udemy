function formatarNome (nomeCompleto) {
    
    let nomesArray = nomeCompleto.split(" ")
    if (nomesArray.length === 1) {
        return nomeCompleto
    }
    let primeiroNome = nomesArray.shift()
    return nomesArray.join(" ")+ " ," + primeiroNome
}

console.log(formatarNome("Allysson")) // Allysson
console.log(formatarNome("Allysson Borges")) // Allysson B.
console.log(formatarNome("Allysson ferreira Borges")) // Allysson B.
