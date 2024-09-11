// let conteiner = document.querySelectorAll(".text-card")

// console.log(conteiner)

fetch('../db/productos.json')
.then(resultado => resultado.json())
.then(data => console.table(data))

// fetch("../db/productos.json")
// .then(resultado => resultado.json())
// .then(data => {
//     data.forEach(producto => {
//         let div = document.createElement('div')
//         div.innerHTML = `<h3 id="${producto.id}"> ${producto.nombre} </h3>
//                         <p> ${producto.precio} </p>`
//         conteiner.appendChild(div)
//     });

// })