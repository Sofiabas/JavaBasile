const sucursalContenido=(contenidos) =>{

  const {imagen,Nombre,Direccion} = contenidos 
    return `
    <div class="container marketing">
    <div class="row">
    <div class="col-lg-4">
     <img src="${imagen}" class="bd-placeholder-img rounded-circle" width="140px" height="140px" alt="sucursal1">
      <h2 class="fw-normal">${Nombre}</h2>
      <p>${Direccion}</p>
    </div>
    </div>
    </div>
    `
}

const obtenerContenido = (URL)  =>{
  let sucursalAmostrar =""
  fetch (URL)
  .then((response) => response.json())
  .then((data)=> {
for (contenidos of data) {
  sucursalAmostrar +=  sucursalContenido(contenidos)
}
 contenido.innerHTML=  sucursalAmostrar
  })
}