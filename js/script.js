const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const tema = document.getElementById('btn-aparencia');
const backhora = document.getElementsByClassName('fundoHora');
const backgroundBody = document.querySelector("body");

const relogio = setInterval(function time () {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if ( hr < 10) hr = '0' + hr;sec
  if ( min < 10) min = '0' + min;
  if ( sec < 10) sec = '0' + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
})

tema.addEventListener("click", function(){
  console.log({backhora});
  this.style.background = "white";
  backgroundBody.style.background = backgroundBody.style.background === "black" ? "white" : "black";
  backhora[0].style.background = backgroundBody.style.background === "black" ? "white" : "black";
  backhora[1].style.background = backgroundBody.style.background === "black" ? "white" : "black";
  backhora[2].style.background = backgroundBody.style.background === "black" ? "white" : "black";
  backhora[0].style.color = backgroundBody.style.background === "black" ? "black" : "white";
  backhora[1].style.color = backgroundBody.style.background === "black" ? "black" : "white";
  backhora[2].style.color = backgroundBody.style.background === "black" ? "black" : "white";
  this.innerText = `Tema: ${backgroundBody.style.background === "black" ? "Escuro" : "Claro"}`;
  tema.style.backgroundColor = backgroundBody.style.background === "black" ? "white" : "#8ccece";
})