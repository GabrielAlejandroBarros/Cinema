const boton = document.getElementById('resultado');
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", limpiar);
function limpiar(){  
  pantalla.innerText = ""; 
}

boton.addEventListener("click", mostrar);
  function mostrar(){
    const cantidad = document.getElementById("num").value;
    const pantalla = document.getElementById("pantalla");     
    let cant = document.getElementById("num").value;
    num.addEventListener("change",mostrar);   
    categoria.addEventListener("change",mostrar);
    let camposValidos = nombreValido() && correoValido() && apellidoValido();
    if(cantidad < 6 && cantidad > 0 && camposValidos){
      let texto = pagar(cantidad) + "";    
      let element = document.createElement('input');
      let hijo = document.createTextNode(texto);
      pantalla.innerText = texto;    
    }
  }

  function nombreValido(){
    let nombre = document.getElementById("nombre").value;
    if(nombre.length<3){
      alert("El nombre debe tener un minimo de 3 letras")
    }
    return nombre.length >= 3;
  }
  function apellidoValido(){
    let apellido = document.getElementById("apellido").value;
    if(apellido.length<4){
      alert("El apellido debe tener un minimo de 4 letras");
    }
    return apellido.length >= 4;
  }
  function correoValido(){
    let email = document.getElementById("correo").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let test = regexEmail.test(email);
    if(!test){
      alert("El campo correo debe estar completo");
    }
    return test; 
  }
  function pagar(cant){
    let valor = 2000;
    if(esJubilado())
      valor = valor * 0.1;
    if(esTrabajador())
      valor = valor * 0.25;
    if(esEstudiante())
      valor = valor * 0.8;
    return valor * cant;
  }
  function esTrabajador(){
    let categoria = document.getElementById("categoria").value;
    return "Trabajador" == categoria;
  }
  function esEstudiante(){
    let categoria = document.getElementById("categoria").value;
    return "Estudiante" == categoria;
  }
  function esJubilado(){
    let categoria = document.getElementById("categoria").value;
    return "Jubilado" == categoria;
  }
  