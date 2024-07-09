// Probar que haya conexion con archivo de javascript: encriptador.js
// var conexion= "Conexion exitosa encriptador.js";
// document.write(conexion);

// Seleccion de Elementos 

const btnEncriptar = document.querySelector(".btn-encriptar");  // Metodo que nos permite seleccionar a nuestra clase .btnEncriptar.
const txtEncriptar = document.querySelector(".encriptar");      // Capturar el Valor de nuestro text area: Encriptar.
const aviso = document.querySelector(".texto-aviso");           // Guardar el contenido de texto en la constante aviso 
const respuesta = document.querySelector(".evaluar");           // Mostrar el texto encriptado en la clase .evaluar.
const contenido = document.querySelector(".panel-resultado-contenedor");// Mostrar el resultado encriptado en el panel tarjeta-contenedor.
const btnCopiar = document.querySelector(".btn-copiar");        // Boton Copiar.
const btnDesencriptar = document.querySelector(".btn-desencriptar"); // Metodo que nos permite seleccionar a nuestra clase .btnDesncriptar.

// Boton de ENCRIPTAR y declaramos el evento: addEventListener, hasta que no se haga el click.

function encriptar() {
    let texto = txtEncriptar.value;
    console.log(texto);
    // Declaramos el metodo normalize que se usa para Normalizar una cadena.
    // Reemplzar signos de puntuacion, acentos, caracteres especiales como @#$%& por un espacio en blanco.    
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt);

    // Validar que No se capture el campo vacio
    if(texto == "") {
        msgvalidacion("El Campo No debe estar Vacio, Verifique!!!")
    } 
    // Validar que no se capturen minusculas.
    else if(texto !== texto.toLowerCase()) {
        msgvalidacion("El texto debe ser todo en minusculas, Verifique!!!")
    }    
    // Validar que No se capturen acentos, ni caracteres especiales.
    else if(texto !== txt) {
        msgvalidacion("No se permiten acentos ni Caracteres Especiales, Verifique!!!")
    }    
    // Encriptado del texto.
    else {
        texto = texto.replace(/e/mg,"enter"); 
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufar");
        respuesta.innerHTML = texto;          // innerHTML nos permite leer el dato encriptado dentro de text .evaluar            
        btnCopiar.style.visibility="inherit"; // Mostrar el boton copiar en el panel tarjeta-contenedor.
        contenido.remove();                   // Eliminar el contenido del area de panel tarjeta-contenedor, mono y textos
    }
    console.log(texto);
}

function desencriptar() {
    let texto = txtEncriptar.value;
    console.log(texto);
    
    // Declaramos el metodo normalize que se usa para Normalizar una cadena.
    // Reemplzar signos de puntuacion, acentos, caracteres especiales como @#$%& por un espacio en blanco.    
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt);

    // Validar que No se capture el campo vacio
    if(texto == "") {
        msgvalidacion("El Campo No debe estar Vacio, Verifique!!!")
    } 
    // Validar que no se capturen minusculas.
    else if(texto !== texto.toLowerCase()) {
        msgvalidacion("El texto debe ser todo en minusculas, Verifique!!!")
    }    
    // Validar que No se capturen acentos, ni caracteres especiales.
    else if(texto !== txt) {
        msgvalidacion("No se permiten acentos ni Caracteres Especiales, Verifique!!!")
    }    
    // Desencriptado del texto
    else {
        texto = texto.replace(/enter/mg,"e"); 
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufar/mg,"u");
        respuesta.innerHTML = texto;          // innerHTML nos permite leer el dato encriptado dentro de text .evaluar            
        btnCopiar.style.visibility="inherit"; // Mostrar el boton copiar en el panel tarjeta-contenedor.
        contenido.remove();                   // Eliminar el contenido del area de panel tarjeta-contenedor, mono y textos
    }
    console.log(texto);
}

// Mostrar el Mensaje de Validacion.
function msgvalidacion(msg) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFFFF";
    aviso.style.fontweight = "900";
    //aviso.textContent = "El Campo No debe estar Vacio, Verifique!!!";
    aviso.textContent = msg;
    // Declaramos el metodo setTimeOut y le indicamos con => Funcion Flecha remover atributo.
    // Durante 1.5 segundos.
    setTimeout(()=> {
        aviso.removeAttribute("style");
    },1500);
    return;
}

// Programacion del BOTON COPIAR // 
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();              // Selecciona texto a copiar.
    document.execCommand("copy"); // Ejecuta el comando equivale a Ctrl-C
});

function copiar() {
    let copiar = respuesta;
    copiar.select();              // Selecciona texto a copiar.
    document.execCommand("copy"); // Ejecuta el comando equivale a Ctrl-C
}

