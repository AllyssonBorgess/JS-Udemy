(function(){
    const nomeUsuario = null
    //document.querySelector(".top-bar p").textContent = "Bem-vindo(a)," + nomeUsuario;
    const elemento = document.querySelector(".top-bar p");
    
    if (nomeUsuario) {
        
        console.log(elemento.textContent)

        elemento.innerHTML += "<br>Bem-vindo(a), " + nomeUsuario + "</b>";
    } else {
        elemento.remove();
    }

    console.log(elemento.textContent)
        
        
})();