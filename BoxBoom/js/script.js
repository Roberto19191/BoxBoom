const form = document.querySelector("#form");
const cadSelect = document.querySelector("#sitcad");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (cadSelect && cadSelect.value === "") {
        alert("Por favor, escolha uma situação de login!");
        return;
    }

    form.submit();
});

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput && nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if (emailInput && emailInput.value === "") {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    if (passwordInput && !validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

    form.submit();
});

function validatePassword(password, minDigit) {
    if (password.length >= minDigit) {
        return true;
    }
    return false;
}

// -------------------------------
// SUAS NOVAS VALIDAÇÕES AQUI 👇
// -------------------------------
const larguraInput = document.querySelector("#largura");
const profundidadeInput = document.querySelector("#profundidade");
const comprimentoInput = document.querySelector("#comprimento");
const espessuraInput = document.querySelector("#espessura");
const pesoInput = document.querySelector("#peso");
const materialInput = document.querySelector("#material");
const corInput = document.querySelector("#cor");
const tampaInput = document.querySelector("#tampa");
const personalizacaoInput = document.querySelector("#personalização");
const finalidadeInput = document.querySelector("#finalidade");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // só executa se o formulário tiver esses campos
    if (larguraInput && larguraInput.value.trim() === "") {
        alert("Por favor, preencha a largura da caixa.");
        return;
    }

    if (profundidadeInput && profundidadeInput.value.trim() === "") {
        alert("Por favor, preencha a profundidade da caixa.");
        return;
    }

    if (comprimentoInput && comprimentoInput.value.trim() === "") {
        alert("Por favor, preencha o comprimento da caixa.");
        return;
    }

    if (espessuraInput && espessuraInput.value.trim() === "") {
        alert("Por favor, preencha a espessura da caixa.");
        return;
    }

    if (pesoInput && pesoInput.value.trim() === "") {
        alert("Por favor, preencha o peso da caixa.");
        return;
    }

    if (materialInput && materialInput.value.trim() === "") {
        alert("Por favor, informe o tipo de material da caixa.");
        return;
    }

    if (corInput && corInput.value.trim() === "") {
        alert("Por favor, informe a cor ou acabamento desejado.");
        return;
    }

    if (tampaInput && tampaInput.value.trim() === "") {
        alert("Por favor, informe se a caixa terá tampa.");
        return;
    }

    if (personalizacaoInput && personalizacaoInput.value.trim() === "") {
        alert("Por favor, informe se deseja personalização.");
        return;
    }

    if (finalidadeInput && finalidadeInput.value.trim() === "") {
        alert("Por favor, informe a finalidade da caixa.");
        return;
    }

    // Se tudo estiver certo, envia o formulário normalmente
    alert("Formulário enviado com sucesso!");
    form.submit();
});
