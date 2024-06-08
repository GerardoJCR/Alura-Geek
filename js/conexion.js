
async function conexionListar(){
    try{
        const conexion = await fetch("https://fake-api-iota-two.vercel.app/productos");
        const conexionTransformada = conexion.json();
        
    return conexionTransformada;

    }
    catch(error){
        console.log("Error con la conexion ", error)
    }
}


// post creacion producto

async function crearProductos(titulo, url,precio){
    const conexion = await fetch("https://fake-api-iota-two.vercel.app/productos", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            url:url,
            precio: precio
        })
    });
    const conexionTransformada = conexion.json();

    return conexionTransformada;
}

// delete producto

async function eliminarProducto(id){
    try{
        const respuesta = await fetch(`https://fake-api-iota-two.vercel.app/productos/${id}`,{
            method:'DELETE'
        });
        if(!respuesta.ok){
            throw new Error('Error al eliminar el producto');
        }
        alert("Producto eliminado correctamente");
    }
    catch(error){
        console.log("Error al eliminar el producto", error)
    }
}
//buscar producto
async function buscarProducto(palabraClave){
    const conexion = await fetch(`https://fake-api-iota-two.vercel.app/productos?q=${palabraClave}`);
    const conexionTransformada = conexion.json();
    return conexionTransformada;
}

export const conexionApi = {
    conexionListar, crearProductos, eliminarProducto, buscarProducto
}