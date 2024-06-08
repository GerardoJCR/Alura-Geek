import { conexionApi } from "./conexion.js";
import crearCarta from "./mostrarProducto.js";

async function buscarProducto(evento){
    try{
        evento.preventDefault();
        const inputBusqueda = document.querySelector('[input-buscar]').value;
        const busquedaProducto = await conexionApi.buscarProducto(inputBusqueda);
        // console.log(busquedaProducto);
        const listaProductos = document.querySelector('[data-productos]');

        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        busquedaProducto.forEach(element => listaProductos.appendChild(crearCarta(element.titulo, element.url, element.precio)));
        if(busquedaProducto.length == 0){
            // alert("NO fueron encontrados XD")
            listaProductos.innerHTML = `<h2>No se encontro ningun producto relacionado con ${inputBusqueda}</h2>`;
        }


    }
    catch(error){
        console.log("Hay un error con la busqueda", error)
    }
}

const btnBuscar = document.querySelector('[btn-enviar]');
btnBuscar.addEventListener("click", evento => buscarProducto(evento) )

//Evento enter
const inputElemento = document.getElementById("buscar");
inputElemento.addEventListener("keyup", function(e){
    if(e.key === 'Enter'){
        buscarProducto(e)
    }
})