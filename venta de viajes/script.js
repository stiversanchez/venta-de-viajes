import { barcelona,roma,paris,londres } from "./ciudades.js";

let enlaces = document.querySelectorAll('a');
let tituloElemento= document.getElementById('titulo');
let subtituloElemento= document.getElementById('subtitulo');
let parrafoElemento= document.getElementById('parrafo');
let precioElemento= document.getElementById('precio');

//agregar un evento 'click' para cada enlace
enlaces.forEach((enlace) =>{
    enlace.addEventListener('click', function (){
        //remover activo
        enlaces.forEach( function (enlace){
            //remover la clase active a todos los enlaces
            enlace.classList.remove('active');
        });

        // agregar la clase 'active' al enlace actual
        this.classList.add('active');
    
        // obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)
        
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        });
})

// funcion para traer la informacion correcta desde ciudades.js

let obtenerContenido = (enlace)=>{
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];
}