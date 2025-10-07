let x = 10
let y = {n: 10}

function mudaX(n) {
    n++
    console.log(n)
}

function mudaY(obj) {
    obj.n++
    console.log(obj)
}

mudaX(x)
console.log(x)

mudaY(y)
console.log(y)