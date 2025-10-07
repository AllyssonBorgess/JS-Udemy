function sum() {
    //const arr = []
    //for(let i = 0; i < arguments.length; i++) {
        //arr.push(arguments[i])
    //}
    //console.log(arr)

    array.prototype.slice.call(arguments)
    console.log(arguments)
    console.log(arguments.length)
    console.log(Array.isArray(arguments))
    console.log(Array.isArray(arr))
}
sum(1, 2, 3)