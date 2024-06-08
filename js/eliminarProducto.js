import { conexionApi } from "./conexion.js";

const tarjetaProducto = document.querySelector('[data-productos]');

function crearCarta(id, titulo, url, precio) {
    //Creamos un nuevo articulo para presentar un producto
    const producto = document.createElement('article');
    producto.className = "card__productos"; //Asignamos una clase al articulo
    producto.dataset.id = id; //Agregamos el ID del producto como un atributo de datos
    producto.innerHTML = `
        <div class="productos__container-img">
            <img src="${url}" alt="${titulo}" class="card__productos__img">
        </div>
        <div class="productos__container-informacion">
            <h3 class="producto__titulo">${titulo}</h3>
            <div class="producto__precios">
                <p class="precio"><span>$</span>${precio}</p>
                <span><i class="bi bi-trash-fill" data-id="${id}"></i></span>
            </div>
        </div>
    `;
    
    return producto;
}

async function listarProductos() {
    try {
        //Obtenemos la lista de productos desde la API
        const listaAPI = await conexionApi.conexionListar();
        //Itera sobre la lista de productos y agrega una carta para cada producto al contenedor
        listaAPI.forEach(element => {
            const carta = crearCarta(element.id, element.titulo, element.url, element.precio);
            tarjetaProducto.appendChild(carta);
        });
    } catch (e) {
        console.log("Hay un error en " + e)
    }
}

listarProductos();

// Agregar evento de clic a los íconos de basura
tarjetaProducto.addEventListener('click', async (event) => {
    if (event.target.classList.contains('bi-trash-fill')) {
        const id = event.target.dataset.id; //Obtiene el ID del producto desde el atributo de datos del icono de basura 
        try {
            //Llamamos a la funcion eliminarProducto del modulo de conexion para eliminar
            await conexionApi.eliminarProducto(id);
            //Elimina el elemento HTML del producto del DOM
            const producto = event.target.closest('.card__productos');
            producto.remove();
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }
});

