const conteiner = document.querySelectorAll(".text-card")

// fetch('../db/productos.json')
// .then(resultado => resultado.json())
// .then(data => console.table(data))

function obtenerProductos() {
    fetch("../db/productos.json")
    .then(resultado => resultado.json())
    .then(data => {

        data.forEach(producto => {

            const div = document.createElement('div')
            div.innerHTML = `<h3 id="${producto.id}"> ${producto.nombre} </h3>
                            <p> ${producto.precio} </p>`
        
            conteiner.appendChild(div)
        });

    })
}

obtenerProductos()

