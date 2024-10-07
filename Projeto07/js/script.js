window.addEventListener('load', calcularTempo)
function calcularTempo(){
    var data = new Date();
    var numeroDia = data.getDay();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var ampm = hora >= 12 ? 'PM' : 'AM';
    var nomeDia = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    hora = hora % 12;
    hora = hora ? hora : '12';
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto <10 ? '0' + minuto: minuto;

    document.getElementById("dia").innerHTML= nomeDia[numeroDia];
    document.getElementById("hora").innerHTML= hora
    document.getElementById("minuto").innerHTML= minuto;
    document.getElementById("ampm").innerHTML= ampm;

    setTimeout(calcularTempo, 200);

 
}

