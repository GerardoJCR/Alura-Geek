import { conexionApi } from "./conexion.js";

const tarjetaProducto = document.querySelector('[data-productos]');

export default function crearCarta(titulo, url, precio){
    const producto = document.createElement('article');
    producto.className = "card__productos";
    producto.innerHTML = `
    <div class="productos__container-precio">
    <p class="producto__precio"><span>$</span>${precio}</p>
</div>
<div class="productos__container-img">
<img src="${url}" alt="${titulo}" class="card__productos__img">
</div>
<div class="productos__container-informacion">
    <h3 class="producto__titulo">${titulo}</h3>
    <a href="#">Seleccionar</a>
</div>
    `
    return producto;


}
async function listarProductos(){
    try{
        const listaAPI = await conexionApi.conexionListar();
        listaAPI.forEach(element => tarjetaProducto.appendChild(crearCarta(element.titulo, element.url, element.precio)) );

    }
    catch(e){
        console.log("Hay un error en " + e)
    }
}
listarProductos();