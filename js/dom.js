
const listadoHeladeria = document.getElementById("listadoHeladeria")
const listadoCarrito = document.getElementById("listadoCarrito")

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

titulo.innerText = "Pin Pon Helados"
slogan.innerText = "Vení a probarlos"

const mercaderias = ["Paleta de Agua, Cafe Helado, Sundae, Palito Bombon, Churros con Chocolate, Bandeja"]
const compra = []

function cargarProductos(productos) {
  function cargarProductos(productos) {
    listadoHeladeria.innerHTML = ""
    productos.forEach(producto => {
      const h5 = document.createElement("h5");
      h5.innerHTML += `
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Precio:$ ${producto.precio}</p>
        <button class="btn btn-primary css-button-sliding-to-left--sky" id=boton${producto.id}>Pedir</button>
    </div>   
`
      listadoHeladeria.appendChild(h5)
    })
  }
  cargarProductos(productos)
}
