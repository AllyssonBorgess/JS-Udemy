function calcularIMC(peso, altura, callback) {
    if (peso === undefined || altura === undefined) {
        throw new Error("Peso e altura são obrigatórios");
    }
    let imc = peso / (altura * altura);
    if (typeof callback === "function") {
        return callback(imc);
    }
    return imc;
}

function classificarIMC(imc) {
    if (imc < 16.9) {
        return "Abaixo do peso";
    } else if (imc <= 18.4) {
        return "Peso normal";
    } else if (imc <= 24.9) {
        return "Sobrepeso";
    } else if (imc <= 29.9) {
        return "Obesidade grau I";
    } else if (imc <= 34.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }  
}


let imc = calcularIMC(85, 1.90)
let imc2 = calcularIMC(70, 1.75, classificarIMC())
console.log(imc)
console.log(imc2)


