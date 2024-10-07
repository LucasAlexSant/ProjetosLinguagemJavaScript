const mensagemInput = document.getElementById("mensagem-input")

function getMensagem(){
    document.getElementById("mensagem-output").innerHTML = mensagemInput.value;
    mensagemInput.value = "";
}