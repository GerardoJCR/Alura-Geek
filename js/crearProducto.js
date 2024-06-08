import { conexionApi } from "./conexion.js";

const formulario = document.querySelector('[data-formulario]');
async function crearProducto(informacion){
    informacion.preventDefault();
    
    const titulo = document.querySelector('[data-titulo]').value;
    const precio = document.querySelector('[data-precio]').value;
    const url = document.querySelector('[data-url]').value;

    try{
        await conexionApi.crearProductos(titulo, url, precio);
        alert("Producto creado")
        // window.location.href="../pages/";
        // En este caso vamos a colocar un alert de exito
        
    }
    catch(e){
        
        console.log("Hay un error en ", e);
    }
}

formulario.addEventListener("submit", informacion => crearProducto(informacion));


/*limpiar  datos del formulario */

const btnLimpiar = document.querySelector('.clean');

btnLimpiar.addEventListener("click", function(){
    const titulo = document.querySelector('[data-titulo]');
    const precio = document.querySelector('[data-precio]');
    const url = document.querySelector('[data-url]');
    
    titulo.value = "";
    precio.value = "";
    url.value = "";
    
})

