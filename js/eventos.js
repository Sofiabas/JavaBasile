const inputNombre = document.querySelector("#firstName")
const inputApellido = document.querySelector("#lastName")
const inputUserName = document.querySelector("#userName")
const inputEmail = document.querySelector("#email")
const inputDireccion = document.querySelector("#address")
const inputTitular = document.querySelector("#cc-name")
const inputNumero = document.querySelector("#cc-number")
const inputVencimiento = document.querySelector("#cc-expiration")
const inputCvv = document.querySelector("#cc-cvv")
const buttonSubmit = document.querySelector("#submit")


let datosDeInput = ""

document.addEventListener("submit", (evento) => {
    evento.preventDefault()
    guardarDatos()
    console.log("Pedido Enviado")
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pedido Enviado',
        showConfirmButton: false,
        timer: 3000
      })
})

inputNombre.addEventListener("input", () => {
    console.log(inputNombre.value)
})

inputApellido.addEventListener("input", () => {
    console.log(inputApellido.value)
})

inputUserName.addEventListener("input", () => {
    console.log(inputUserName.value)
})
inputEmail.addEventListener("input", () => {
    console.log(inputEmail.value)
})
inputDireccion.addEventListener("input", () => {
    console.log(inputDireccion.value)
})
inputTitular.addEventListener("input", () => {
    console.log(inputTitular.value)
})
inputNumero.addEventListener("input", () => {
    console.log(inputNumero.value)
})
inputVencimiento.addEventListener("input", () => {
    console.log(inputVencimiento.value)
})
inputCvv.addEventListener("input", () => {
    console.log(inputCvv.value)
})


function guardarDatos() {
    const DatosDeUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        user: inputUserName.value,
        email: inputEmail.value,
        direccion: inputDireccion.value,
        titular: inputTitular.value,
        numero: inputNumero.value,
        vencimiento: inputVencimiento.value,
        cvv: inputCvv.value
    
    }
    let str = JSON.stringify(DatosDeUsuario)
    localStorage.setItem("DatosDeUsuario", str)
}

function recuperoDatos(){
if(localStorage.getItem("DatosDeUsuario")){
    const DatosDeUsuario = JSON.parse(localStorage.getItem("DatosDeUsuario"))
    inputNombre.value = DatosDeUsuario.nombre
    inputApellido.value = DatosDeUsuario.apellido
    inputUserName.value = DatosDeUsuario.user
    inputEmail.value = DatosDeUsuario.email
    inputDireccion.value = DatosDeUsuario.direccion
    inputTitular.value = DatosDeUsuario.titular
    inputNumero.value = DatosDeUsuario.numero
    inputVencimiento.value = DatosDeUsuario.vencimiento
    inputCvv.value = DatosDeUsuario.cvv
}
}

recuperoDatos()