// ==UserScript== 
// @name Flashinga! Script 
// @namespace www.flashringa.com.ar 
// @description Script para un rapido acceso a Flashinga!. 
// @include *
// @include 
// ==/UserScript== 

var capa = document.createElement("div"); 
capa.id = "flashinga";
capa.style.background = "#0000FF"; 
var p = document.createElement("p"); 
p.style.color = "#000"; 
p.style.font-family = "tahoma";
var texto = document.createTextNode("Bienvenido a taringa! - "); 
var a = document.createElement("a"); 
a.href = "http://www.taringa.net/perfil/"; 
a.style.color = "#0000FF"; 
var textoLink = document.createTextNode("Ver tu perfil"); 
p.appendChild(texto); 
a.appendChild(textoLink); 
p.appendChild(a); 
capa.appendChild(p); 
var el = document.getElementById("cuerpocontainer"); 
el.insertBefore(capa, el.firstChild); 
