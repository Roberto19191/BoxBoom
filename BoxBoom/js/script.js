const form = document.querySelector("#form");
const cadSelect = document.querySelector("#sitcad");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(cadSelect.value === ""){
        alert("Por favor, escolha uma situação de login!");
        return;
    }

    form.submit();
})

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value ===""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(emailInput.value ===""){
        alert("Por favor, preencha o seu e-mail");
        return;
    }
    
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

    form.submit();
})

function validatePassword(password, minDigit) {
    if (password.length >= minDigit) {
        return true

    }
    return false
};

const larguraInput = document.querySelector("#largura");
const profundidadeInput = document.querySelector("#profundidade");
const comprimentoInput = document.querySelector("#comprimento");
const espessuraInput = document.querySelector("#espessura");
const pesoInput = document.querySelector("#peso");

form.addEventListener("submit", (event)=>{
     event.preventDefault();

    if (larguraInput.value === ""){
        alert("Por favor preencha a largura da caixa")
        return;
    }

    if (profundidadeInput.value === ""){
        alert("Por favor preencha a profundidade da caixa")
        return;
    }
    if (comprimentoInput.value === ""){
        alert("Por favor preencha comprimento da caixa")
        return;
    }
    if (espessuraInput.value === ""){
        alert("Por favor preencha a espessura da caixa")
        return;
    }
    if (pesoInput.value === ""){
        alert("Por favor preencha o peso da caixa")
        return;
    }

    form.submit();

})
