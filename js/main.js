
/*Enlazado de encabezado y footer */

fetch('footer.html')
.then(respuesta => respuesta.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})

/*Menu Hamburguesa*/
document.addEventListener('DOMContentLoaded', function(){
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    hamburguer.addEventListener("click", function(){
        menu.classList.toggle('show');
    })
})


//mostrar datos 
