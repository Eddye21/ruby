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
                                    <p> Cantidad: <span class="counter"> 0 <span> </p>
                                    <button class="plus">+</button>
                                    <button class="minus">-</button>
                                </div>`

        carConteiner.appendChild(carItems)
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
