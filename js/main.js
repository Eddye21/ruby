
const conteiners = document.querySelectorAll(".card-body")

function obtenerProductos() {
    fetch("db/productos.json")
    .then(resultado => resultado.json())
    .then(data => {

            console.log(data)

        data.forEach((producto, i)=> {
                const conteiner = conteiners[i]
                const contenidoCard = document.createElement('div')
                contenidoCard.className = "card-text-index"
                contenidoCard.innerHTML = `<h3 class= "name-product-index"> ${producto.nombre} </h3>
                                            <p class="price"> ${producto.precio} </p>`
            
                conteiner.appendChild(contenidoCard)

        })
    })
}

obtenerProductos()