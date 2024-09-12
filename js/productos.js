const carrito = []

let conteiners = document.querySelectorAll(".card-body")
function obtenerProductos() {
    fetch("../db/productos.json")
    .then(resultado => resultado.json())
    .then(datas => {

            

        datas.forEach((producto, i)=> {
                const conteiner = conteiners[i]
                const contenidoCard = document.createElement('div')
                contenidoCard.className = "card-text"
                contenidoCard.innerHTML = `<h3 class= "name-product"> ${producto.nombre} </h3>
                                            <p> ${producto.precio} </p>
                                            <button id="${producto.id}" class="btn" > Agregar al carrito </button>`
            
                conteiner.appendChild(contenidoCard)
                
                function agregarCarrito() {
                    let botonAgregar = document.querySelectorAll(".btn")
                    botonAgregar.forEach((boton)=> {
                    boton.onclick = (e) => {
                        let productosId = e.currentTarget.id
                        let seleccionId = datas.find(data => data.id == productosId)
                        carrito.push(seleccionId)
                        console.log(carrito)
                        notificacionToast()
                    }
                })
            }
            agregarCarrito()
        })
    })
}




function notificacionToast() {
    Toastify({
        text: "Producto agregado con exito",
        duration: 3000,
        style: {
            background: "rgb(0,176,155)",
        }
    }).showToast();
}                       

obtenerProductos()
