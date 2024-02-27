
var cuadroimg = document.querySelector(".cuadroresultado")
var cuadrotext = document.querySelector(".mje-cuadro")
var btncopiar = document.querySelector(".btn-copiar")
function Encriptar(){
    
    var texto= document.getElementById("texto").value;
    var txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
      Swal.fire({
        title: 'Error!',
        text: 'Campo de texto vacio',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass:{
          confirmButton: 'custom-button',
        },
        
      })
  }

  else if(texto !== txt){
    Swal.fire({
      title: 'Error!',
      text: 'No debe tener acentos y caracteres especiales',
      icon: 'error',
      confirmButtonText: 'Cerrar',
      customClass:{
        confirmButton: 'custom-button',
      },

    })
  }

  else if(texto !== texto.toLowerCase()){
    Swal.fire({
      title: 'Error!',
      text: 'El texto debe ser todo en minuscula',
      icon: 'error',
      confirmButtonText: 'Cerrar',
      customClass:{
        confirmButton: 'custom-button',
      },
    })
  }

  else{
    Ocultar();
    
    var textoencriptado = texto.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat");
    document.getElementById("texto-resultado").innerHTML = textoencriptado;
    btncopiar.style.visibility = "inherit"; 
}
}

var boton1 = document.getElementById("btn-encriptar")
boton1.onclick = Encriptar;

function Desencriptar(){
    
    var texto= document.getElementById("texto").value;
    var txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
      Swal.fire({
        title: 'Error!',
        text: 'Campo de texto vacio',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass:{
          confirmButton: 'custom-button',
        },
        
      })
  }

  else if(texto !== txt){
    Swal.fire({
      title: 'Error!',
      text: 'No debe tener acentos y caracteres especiales',
      icon: 'error',
      confirmButtonText: 'Cerrar',
      customClass:{
        confirmButton: 'custom-button',
      },

    })
  }

  else if(texto !== texto.toLowerCase()){
    Swal.fire({
      title: 'Error!',
      text: 'El texto debe ser todo en minuscula',
      icon: 'error',
      confirmButtonText: 'Cerrar',
      customClass:{
        confirmButton: 'custom-button',
      },
    })
  }

  else{
    Ocultar();
    var textodesencriptado = texto.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u");
    document.getElementById("texto-resultado").innerHTML = textodesencriptado;
    btncopiar.style.visibility = "inherit";

}
}
var boton2 = document.getElementById("btn-desencriptar")
boton2.onclick = Desencriptar;

function Ocultar (){
    cuadroimg.classList.add("ocultar");
    cuadrotext.classList.add("ocultar"); 
}

const button = document.getElementById("btn-copy");
const quote = document.getElementById("texto-resultado");

const copyToClipboard = async str => {
  try {
    await navigator.clipboard.writeText(str);
    console.log("copied");
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", () => {
  copyToClipboard(quote.textContent);
});


