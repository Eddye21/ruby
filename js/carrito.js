let carStorage = localStorage.getItem("carProducts")
carStorage = JSON.parse(carStorage)

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
                                    <p> Cantidad: <span class="counter"> ${product.cantidad || 1} <span> </p>
                                    <button class="minus">-</button>
                                </div>`
                                

        carConteiner.appendChild(carItems)

        botonAgregar()

        function botonAgregar () {

            const add = document.querySelectorAll(".plus")

            const cantidadSpan = document.querySelectorAll(".counter")

            add.forEach((addButton) => {
                addButton.onclick = () => {
                    const cantidadActual = parseInt(cantidadSpan.textContent)
                    cantidadSpan.textContent = cantidadActual + 1
                    car[car.findIndex(p => p.id === product.id)].cantidad++
                    console.log(car)
                    guardarCarrito()
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
        function guardarCarrito(){
            localStorage.setItem("carProducts", JSON.stringify(car))
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
