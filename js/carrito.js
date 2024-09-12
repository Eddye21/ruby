let carStorage = localStorage.getItem("carProducts")
carStorage = JSON.parse(carStorage)

let carConteiner = document.querySelector(".products-conteiner-car")

function renderCar(car) {     
    car.forEach(product => {
        const carItems = document.createElement("div")
        carItems.innerHTML =  `<h3> ${product.nombre} </h3>
                                <p> ${product.precio} </p>`
        
        carConteiner.appendChild(carItems)
    })
}

renderCar(carStorage)
