var valorEstadoGato = localStorage.getItem("gato");
var valorEstadoPerro = localStorage.getItem("perro");
var valorEstadoAccesorios = localStorage.getItem("accesorios");
var valorEstadoMedicamentos = localStorage.getItem("medicamentos");

const verCategoriaGatos = document.getElementById("Gatos");
const verCategoriaPerros = document.getElementById("Perros");
const verCategoriaAccesorios = document.getElementById("Accesorios");
const verCategoriaMedicamentos = document.getElementById("Medicamentos");
if(valorEstadoGato == 1){
    verCategoriaGatos.style = "display: block";
}
if(valorEstadoPerro == 2){
    verCategoriaPerros.style = "display: block";
}
if( valorEstadoAccesorios == 3){
    verCategoriaAccesorios.style = "display: block";
}
if( valorEstadoMedicamentos == 4){
    verCategoriaMedicamentos.style = "display: block";
}
function openCity(evt, categoria) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoria).style.display = "block";
    evt.currentTarget.className += " active";
}