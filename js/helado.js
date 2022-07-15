
function saludar() {
  return "Hola Amigos"
}



let producto = ("Elija Paleta de Agua, Cafe helado, Sundae, Palito Bombon, Bandeja, Churros")

switch (producto) {
  case "PALETA AGUA":
    console.log("Tenemos en stock Paletas de Agua", producto)
    break;
  case "CAFE HELADO":
    console.log("Tenemos en stock Café Helado", producto)
    break;
  case "SUNDAE":
    console.log("Tenemos en stock Sundae", producto)
    break;
  case "PALITO BOMBON":
    console.log("Tenemos en stock Palito Bombon", producto)
    break;
  case "BANDEJA":
    console.log("Tenemos en stock Bandeja", producto)
    break;
  case "CHURROS CON CHOCOLATE":
    console.log("No tenemos en stock Churros", producto)
    break;
  default:
    console.warn("No contamos con Churros, pero puedo ofrecer otra cosa")
    break;
}

function calcular() {
  debugger
  let primerNro = prompt("Ingresa el primer precio:")
  let segundoNro = prompt("Ingresa el segundo precio:")
  let resultado = realizarCalculo(primerNro, segundoNro)
  console.log("Resultado:", resultado)

  saludar()
}

const IVA = 1.21


class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }
  precioFinal() {
    return parseFloat((this.precio * IVA).toFixed(2))
  }
}

const productos = []
const carrito = []



//Agregar Producto

function creoID() {
  return parseInt(Math.random() * 5000)
}

function agregarProducto() {
  debugger
  let id = creoID()
  let nombre = prompt("Ingresa el nombre del producto:")
  let precio = parseInt(prompt("Ingresa el precio:"))
  let stock = parseInt(prompt("Ingresar el stock"))
  productos.push(new Producto(id, nombre, precio, stock))
}

//Lista de Productos

function listarProductos() {
  debugger
  productos.forEach((producto) => {
    console.table(producto)
  });
}

//Buscar Producto
function existenciaProducto() {
  let aBuscar = prompt("Ingrese el código del producto a buscar:")
  debugger
  var resultado = productos.find((producto) => producto.id === parseInt(aBuscar)) ? "El producto existe" : "No se encontró el producto";
  console.log(resultado)

}


//LLENAR AUTOMÁTICAMENTE EL ARRAY DE OBJETOS
function generadorAutomatico() {
  productos.push(new Producto(123, "Paleta de Agua", 70, 80))
  productos.push(new Producto(567, "Cafe Helado", 250, 200))
  productos.push(new Producto(891, "Sundae", 250, 250))
  productos.push(new Producto(234, "Palito Bombon", 80, 150))
  productos.push(new Producto(678, "Bandeja", 200, 100))
  productos.push(new Producto(789, "Churros con Chocolate", 250, 0))
}
generadorAutomatico()

const Clickbutton = document.querySelectorAll('button')
const contenedor = document.getElementById ("contenedor")


Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
  const button = e.target
  const item = button.closest('.card')
  const itemNombre = item.querySelector('.card-title').textContent;
  const itemPrecio = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;


  const NuevoItem = {
    nombre: itemNombre,
    precio: itemPrecio,
    img: itemImg,
    cantidad: 1
  }

  AgregarAlCarrito(NuevoItem)
}

function AgregarAlCarrito(NuevoItem) {

  carrito.push(NuevoItem)
  renderCarrito()
}


function renderCarrito() {
  contenedor.innerHTML =""
  carrito.map(item => {
    let Content = ""
    carrito.forEach(item => {
     Content += `
    <li class="list-group-item d-flex justify-content-between lh-sm" >
    <div>
      <h6 class="my-0">${item.nombre}</h6>
      <small class="text-muted"></small>
    </div>
    <span class="text-muted">${item.precio}</span>
    <input class="tamanio" type="number" min="1" value=${item.cantidad}>
    <button class="delete btn btn-danger">x</button>
  `
    })
    contenedor.innerHTML = Content
  })
}
