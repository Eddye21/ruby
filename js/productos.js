let conteiners = document.querySelectorAll(".card-body")

function obtenerProductos() {
    fetch("../db/productos.json")
    .then(resultado => resultado.json())
    .then(data => {



        data.forEach((producto, i)=> {
            console.log(producto.id)
                const conteiner = conteiners[i]
                const contenidoCard = document.createElement('div')
                contenidoCard.className = "card-text"
                contenidoCard.innerHTML = `<h3 class= "name-product"> ${producto.nombre} </h3>
                                            <p> ${producto.precio} </p>
                                            <button id="${producto.id}" class="btn" > Agregar al carrito </button>`
            
                conteiner.appendChild(contenidoCard)
        })
    })
}

obtenerProductos()

        // data.forEach(producto => {
        //     conteiners.forEach(conteiner => {
        //         const contenidoCard = document.createElement('div')
        //         contenidoCard.className = "card"
        //         contenidoCard.innerHTML = `<h3> ${producto.nombre} </h3>
        //                                     <p> ${producto.precio} </p>
        //                                     <button id = "${producto.id}" class = "btn" > Agregar al carrito </button>`
            
        //         conteiner.appendChild(contenidoCard)
        //     })
        // });

        // data.forEach(producto, i => {

        //     const conteiner = conteiners[i]
        //     const contenidoCard = document.createElement('div')
        //     contenidoCard.className = "card"
        //     contenidoCard.innerHTML = `<h3> ${producto.nombre} </h3>
        //                                     <p> ${producto.precio} </p>
        //                                     <button id="${producto.id}" class="btn" > Agregar al carrito </button>`
            
        //     conteiner.appendChild(contenidoCard)
        // })

