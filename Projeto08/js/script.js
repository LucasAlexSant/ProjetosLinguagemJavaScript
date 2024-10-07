const userInput = document.getElementById("userInput");
var expressao = '';

function press (num){
    expressao += num;
    userInput.value= expressao

}

function igual(){
    userInput.value = eval(expressao)
    expressao= '';
}

function apagar(){
    expressao = '';
    userInput.value = expressao;
}

