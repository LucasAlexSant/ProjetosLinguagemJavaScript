const mercadorias = document.getElementsByClassName("mercadorias")[0]
const pincel = document.getElementById("pincel");
const todosItens = document.getElementById("todosItens")
const userInput = document.getElementById("userInput")

pincel.addEventListener("click", function(){
    todosItens.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if (event.key == "Enter")
        addItem();
})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- "+ userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    todosItens.insertAdjacentElement("beforeend", h2);
}