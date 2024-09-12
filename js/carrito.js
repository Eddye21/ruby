let carStorage = localStorage.getItem("carProducts")
carStorage = JSON.parse(carStorage)

console.table(carStorage)

carStorage.forEach(product =>{
    function renderCar() {
        let carConteiner = document.getElementsByClassName("products-conteiner-car")
    
        let carItems = document.createElement("div")
        carItems.innerHTML =  `<h3> ${product.nombre} </h3>
                                <p> ${product.precio} </p>`
        carConteiner.appendChild(carItems)
    }
    renderCar()
}) 

