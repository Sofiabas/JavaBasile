class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
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

function generarCarrito() {
  carrito.push(new Producto(123, "Paleta de Agua", 70, 80))
  carrito.push(new Producto(567, "Cafe Helado", 250, 200))
  carrito.push(new Producto(891, "Sundae", 250, 250))
}
generarCarrito()

const botonCarrito = document.querySelectorAll('.addToCart');
botonCarrito.forEach((botonAgregar) => {
  botonAgregar.addEventListener('click',botonClick);
});

const contenedorCarrito = document.querySelector(
  '.contenedorCarrito'
);


function botonClick(event) {
  const button = event.target;
  const item = button.closest('.item');
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  
  agregarAlCarrito(itemTitle,itemPrice);
}

function agregarAlCarrito(itemTitle,itemPrice) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Se ha agregado al carrito'
  })
const tituloselemento = contenedorCarrito.getElementsByClassName('tituloitem')
for  (let i = 0 ; i < tituloselemento.length; i++){
  if (tituloselemento[i].textContent === itemTitle) {
    let cantidadElemento = tituloselemento[i].parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
    cantidadElemento.value++;
    actualizarTotal()
    return;
  }
}
  const filaCarrito= document.createElement('div');
  const shoppingCartContent = `  
  <div class="shoppingCartItem">
  <ul class="list-group mb-3 contenedorCarrito" id="listadoCarrito">
  <li class="list-group-item d-flex justify-content-between lh-sm">
    <div>
      <h6 class="my-0 p-2  tamanio2 tituloitem">${itemTitle}</h6>
      <small class="text-muted"></small>
    </div>
    <strong class=" my-0 p-2 tamanio2">$</strong>
    <span class="text-muted my-0 p-2 tamanio2 precioCarrito">${itemPrice}</span>
    <div
    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom ">
    <input class="shopping-cart-quantity-input shoppingCartItemQuantity tamanio p-2" type=""
        value="1">
    <button class="btn btn-danger btnDelete " type="button">X</button>
</div>
  </li>
</ul>
</div>`;
filaCarrito.innerHTML = shoppingCartContent;
contenedorCarrito.append(filaCarrito);
filaCarrito.querySelector('.btnDelete').addEventListener('click',removerItemCarrito);
filaCarrito.querySelector('.shoppingCartItemQuantity').addEventListener('change', cambioCantidad);
actualizarTotal();

}

function actualizarTotal() {
  let total = 0;
  const totalCarrito = document.querySelector('.totalCarrito');
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

shoppingCartItems.forEach((shoppingCartItem)=> {
const precioItemCarrito = shoppingCartItem.querySelector('.precioCarrito');
const precioCarrito = Number( precioItemCarrito.textContent
  );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + precioCarrito * shoppingCartItemQuantity;
  }); 
  totalCarrito.innerHTML = `${total}`;
}

function removerItemCarrito(event){
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: 'Se ha eliminado del carrito'
  })
  actualizarTotal()
}

function cambioCantidad(event){
  const input = event.target;
  if (input.value<=0){
    input.value = 1;
  }
  actualizarTotal();
}


