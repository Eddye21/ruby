const carrito = []

function obtenerCarrito() {
    const respuesta = fetch ("db/articulos.json")
    const productos = respuesta.json()
    return productos
}

console.log(obtenerCarrito())

function mostraCarrito () {
    const productos = obtenerCarrito()
    const conteiners = document.getElementById("text-card")
    const text = document.createElement("div")
    text.innerHTML = `<h3> ${productos} </h3>`
    conteiners.appendChild(text)
    // for (let i = 0; i < conteiners.length; i ++){
    //     const conteiner = conteiners[i]
    //     const producto = productos [i]
    //     console.log(producto.nombre[1])
    //     const card = document.createElement("div")
    //     card.innerHTML = `<h3> ${producto.nombre} </h3>
    //                         <button class="btn" id="${producto.id}> Agregar al carrito </button> ` 
    //     conteiner.appendChild(card)
    // }
}

mostraCarrito()


