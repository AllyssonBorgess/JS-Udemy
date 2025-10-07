const arr = [1, 2, 3]
const obj = {
            nome: "Allysson",
            idade: "30",
            email: "allyssoncdo@gmail"
}

for(let prop in obj) {
    console.log(prop, obj[prop])
}

for(n of arr) {
    console.log(n)
}