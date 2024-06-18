const perguntasERespostas = document.querySelectorAll(".duvida");

perguntasERespostas.forEach(function(item){
    item.addEventListener("click", function(){
        const respostaAtivaAtual = document.querySelector(".mostrar");

        if(respostaAtivaAtual){
            respostaAtivaAtual.classList.remove("mostrar");
        }

        item.classList.add("mostrar");

    });
});