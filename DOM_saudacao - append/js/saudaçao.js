(function(){
    const nomeUsuario = "Allysson"; 
    if (nomeUsuario) {
        const topBarElemento = document.createElement("div");
        topBarElemento.className = "top-bar";
        topBarElemento.innerHTML = `Olá, ${nomeUsuario}! Bem-vindo de volta.`;

        //elementoPai.insertBefore(novoElemento, elementoReferencia);
        const elementoPai = document.querySelector(".hero");
        elementoPai.insertBefore(topBarElemento, elementoPai.firstChild);

        console.log(elementoPai.firstChild(""));
    }
})();