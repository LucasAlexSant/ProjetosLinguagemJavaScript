var index = 0;

mostrarImagem(index)

function mostrarImagem(i){
    index += i;

    var imagems = document.getElementsByClassName("imagem");

    var dots = document.getElementsByClassName("dot");

    for(i = 0; i< imagems.length; i++)
        imagems[i].style.display = "none";

    for(i = 0; i< dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if(index > imagems.length - 1)
        index = 0;
    
    if (index < 0 ) 
        index= imagems.length -1;

    imagems[index].style.display = "block"
    dots[index].className +=" active";
}