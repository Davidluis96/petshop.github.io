document.getElementById('comida-gatos').addEventListener('click', () =>{
    localStorage.setItem("gato",1);
    localStorage.removeItem("perro");
    localStorage.removeItem("accesorios");
    localStorage.removeItem("medicamentos");
});
document.getElementById('comida-perros').addEventListener('click', () =>{
    localStorage.removeItem("gato")
    localStorage.setItem("perro",2);
    localStorage.removeItem("accesorios");
    localStorage.removeItem("medicamentos");
});
document.getElementById('accesorios').addEventListener('click', () =>{
    localStorage.removeItem("gato");
    localStorage.removeItem("perro");
    localStorage.setItem("accesorios",3);
    localStorage.removeItem("medicamentos");
});
document.getElementById('medicamentos').addEventListener('click', () =>{
    localStorage.removeItem("gato");
    localStorage.removeItem("perro");
    localStorage.removeItem("accesorios");
    localStorage.setItem("medicamentos",4);
});

// ventana quienes somos

const modal = document.getElementById("modal");

document.getElementById("enlace-modal").addEventListener("click", ()=>{
    modal.style = "display: flex";
});

document.getElementById("boton-cerrar-modal").addEventListener('click',()=>{
    modal.style = "display: none";
});
document.querySelector("main").addEventListener('click',()=>{
    modal.style = "display: none";
});

//transicion gatos
var imagenGatos = document.querySelectorAll(".imagen-animales");
var img = ["./images/salchicha-pequeno.jpg","./images/gato_con_collar.jpg","./images/gato-sentado.jpg"];

setInterval(() => {
    imagenGatos[0].setAttribute("src","./images/gato-sentado.jpg");

}, 4000);
setInterval(() => {
    imagenGatos[0].setAttribute("src","./images/gato_con_collar.jpg");

}, 8000);
setInterval(() => {
    imagenGatos[0].setAttribute("src","./images/salchicha-pequeno.jpg");
}, 12000);

setInterval(() => {
    imagenGatos[1].setAttribute("src","./images/gato_con_collar.jpg");

}, 4000);
setInterval(() => {
    imagenGatos[1].setAttribute("src","./images/salchicha-pequeno.jpg");

}, 8000);
setInterval(() => {
    imagenGatos[1].setAttribute("src","./images/gato-sentado.jpg");
}, 12000);
setInterval(() => {
    imagenGatos[2].setAttribute("src","./images/salchicha-pequeno.jpg");

}, 4000);
setInterval(() => {
    imagenGatos[2].setAttribute("src","./images/gato-sentado.jpg");

}, 8000);
setInterval(() => {
    imagenGatos[2].setAttribute("src","./images/gato_con_collar.jpg");
}, 12000);
