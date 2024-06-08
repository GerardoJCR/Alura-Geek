import { conexionApi } from "./conexion.js";
const listaProductos = document.querySelector('[data-productos]');

function crearCarta(url , titulo){
    const producto = document.createElement('article');
    producto.className = "card__producto";
    producto.innerHTML = `
    <div class="card__producto-image">
    <img src="${url}" alt="${titulo}" class="producto-imagen">
</div>
<div class="card__producto-title">
    <h3 class="producto-titulo">${titulo}</h3>
</div>
    `
    return producto;
}

async function listarProductos(){
    try{
        const listApi = await conexionApi.conexionListar();
        listApi.forEach(element => listaProductos.appendChild(crearCarta(element.url, element.titulo)))
    }
    catch(error){
        console.log("No se cargaron los productos " + error)
    }
}
listarProductos()