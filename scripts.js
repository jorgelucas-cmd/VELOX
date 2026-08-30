const formulario = document .querySelector(".formulario");
const mascara1 = document.querySelector(".mascara-formulario");
const mascara2 = document.querySelector(".mascara-formfrural");
const mascara3 = document.querySelector(".mascara-formrural");
const fibraRural = document .querySelector(".formfrural");
const radioRural = document .querySelector(".formrural");

function fibra() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara1.style.visibility = "visible";
}

function esconderform() {
    formulario.style.left = "-850px";
    formulario.style.transform = "translateX(0)";
    mascara1.style.visibility = "hidden";
}

function  fibrarural() {
    fibraRural.style.left = "50%";
    fibraRural.style.transform = "translateX(-50%)";
    mascara2.style.visibility = "visible";
}

function rural() {
    radioRural.style.left = "50%";
    radioRural.style.transform = "translateX(-50%)";
    mascara3.style.visibility = "visible";
}

function esconderform1() {
    fibraRural.style.left = "-850px";
    fibraRural.style.transform = "translateX(0)";
    mascara2.style.visibility = "hidden";
}

function esconderform2() {
    radioRural.style.left = "-850px";
    radioRural.style.transform = "translateX(0)";
    mascara3.style.visibility = "hidden";
}