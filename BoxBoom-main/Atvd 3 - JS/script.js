const perguntas = document.querySelector("#perguntas")
const larguraInput = document.querySelector("#largura")
const profundidadeInput = document.querySelector("#profundidade")
const comprimentoInput = document.querySelector("#comprimento")
const espessuraInput = document.querySelector("#espessura")
const pesoInput = document.querySelector("#peso")

perguntas.addEventListener("submit", (event)=>{
     event.preventDefault();

    if (larguraInput.value === ""){
        alert("Por favor preencha a largura da caixa")
        return
    }

    if (profundidadeInput.value === ""){
        alert("Por favor preencha a profundidade da caixa")
        return
    }
    if (comprimentoInput.value === ""){
        alert("Por favor preencha comprimento da caixa")
        return
    }
    if (espessuraInput.value === ""){
        alert("Por favor preencha a espessura da caixa")
        return
    }
    if (pesoInput.value === ""){
        alert("Por favor preencha o peso da caixa")
        return
    }



})

   
