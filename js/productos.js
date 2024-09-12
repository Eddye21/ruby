let conteiners = document.querySelectorAll(".text-card")

function obtenerProductos() {
    fetch("../db/productos.json")
    .then(resultado => resultado.json())
    .then(data => {

        data.forEach(producto => {
        conteiners.forEach(conteiner => {
            const contenidoCard = document.createElement('div')
            contenidoCard.innerHTML = `<h3> ${producto.nombre} </h3>
                                        <p> ${producto.precio} </p>`
        
            conteiner.appendChild(contenidoCard)
        })
        });

    })
}

obtenerProductos()

