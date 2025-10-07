const teste = function (cb) {
    console.log("funçao teste")
    console.log (cb)
    if (typeof cb === "function") {
        cb(40);
    }
    
}

const fn = function (param) {
    console.log("funçao callback")
    console.log(param)
}
//fn(30)


teste(fn);