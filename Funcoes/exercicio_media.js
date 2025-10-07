(function(){
    function calcularMedia() {
        let total = 0
        let qnt = arguments.length

        for(let i = 0; i < qnt; i++) {
            if(typeof arguments[i] !== 'number') {
                throw Error('Todos os argumentos devem ser números')
            }
            total += arguments[i]
        }
        return total / qnt

    }

    let media =  calcularMedia(2, 4, 6)
    console.log(media)
})()