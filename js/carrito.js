let carStorage = localStorage.getItem("carProducts")
carStorage = JSON.parse(carStorage)

let carConteiner = document.querySelector(".products-conteiner-car")

const add = document.querySelectorAll(".plus")

const carrito = []

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
                                    <p> Cantidad: <span id="${product.cantidad || 1} " class="counter"> 0 <span> </p>
                                    <button class="minus">-</button>
                                </div>`

        carConteiner.appendChild(carItems)

        const cantidadSpan = document.querySelectorAll(".counter")

        botonAgregar()


        function botonAgregar () {
            add.forEach((addButton) => {
                addButton.onclick = () => {
                    const cantidadActual = parseInt(cantidadSpan.textContent)
                    cantidadSpan.textContent = cantidadActual + 1
                    carrito
                    // let productosId = e.currentTarget.id
                    // let seleccionId = car.find(product => product.id == productosId)

                    // guardarCarrito()
                }
                // addButton.onclik = () => {
                //     alert("press ok")
                //     // let productosId = e.currentTarget.id
                //     // let seleccionId = car.find(product => product.id == productosId)
                //     // carrito.push(seleccionId)
                // } 
            })
        }

        // function guardarCarrito(){
        //     localStorage.setItem("carProducts", JSON.stringify(carrito))
        //     console.log(carrito)
        // }
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
