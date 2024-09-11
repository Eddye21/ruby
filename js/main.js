
let conteiner = document.querySelector('#test')

fetch("db/productos.json")
.then(resultado => resultado.json())
.then(data => {
    data.forEach(producto => {
        let div = document.createElement('div')
        div.innerHTML = `<h3> ${producto.nombre} </h3>
                        <p> ${producto.precio} </p>`
        div.appendChild(conteiner)
    });

})

// const carrito = []

// function obtenerCarrito() {
//     fetch ("db/articulos.json")
//     .then(res => res.json())
//     .then(data => console.table(data))
// }

// console.log(obtenerCarrito())

// function mostraCarrito () {
//     const productos = obtenerCarrito()
//     const conteiners = document.getElementById("text-card")
//     const text = document.createElement("div")
//     text.innerHTML = `<h3> ${productos} </h3>`
//     conteiners.appendChild(text)
//     // for (let i = 0; i < conteiners.length; i ++){
//     //     const conteiner = conteiners[i]
//     //     const producto = productos [i]
//     //     console.log(producto.nombre[1])
//     //     const card = document.createElement("div")
//     //     card.innerHTML = `<h3> ${producto.nombre} </h3>
//     //                         <button class="btn" id="${producto.id}> Agregar al carrito </button> ` 
//     //     conteiner.appendChild(card)
//     // }
// }

// mostraCarrito()


