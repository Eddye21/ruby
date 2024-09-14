let carStorage = localStorage.getItem("carProducts")
carStorage = JSON.parse(carStorage)

const carrito = []

let carConteiner = document.querySelector(".products-conteiner-car")

function renderCar(car) {     
    car.forEach(product => {
        const carItems = document.createElement("div")
        carItems.className = "text-car"
        carItems.innerHTML =  `<div class="conteiner-text">
                                    <h3> ${product.nombre} </h3>
                                    <span> Precio: ${product.precio} </span>
                                </div>
                                <div class="conteiner-counter">
                                    <button class="plus">+</button>
                                    <p> Cantidad: <span class="counter"> 0 <span> </p>
                                    <button class="minus">-</button>
                                </div>`

        carConteiner.appendChild(carItems)

        counter()
        botonAgregar()

        function botonAgregar () {
            const add = document.querySelector(".plus")
            add.onclik = () => {
                const cantidadActual = parseInt(cantidadSpan.textContent)
                cantidadSpan.textContent = cantidadActual + 1
                carrito[carrito.findIndex(p => p.id === producto.id)].cantidad++
                localStorage.setItem("carritoProductos", JSON.stringify(carrito))
            } 
        }

        function counter () {
            const contador = document.querySelector(".counter")
            contador.parseInt = ""
        }
    })
}






function vaciarCarrito() {
    let contenImg = document.querySelector(".delete-all")
        contenImg.onclick = () => {
            localStorage.clear()
            location.reload()
        }

}

vaciarCarrito()

renderCar(carStorage)
