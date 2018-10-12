var container = document.getElementById("c1");
// La variable container contiene el div con id: c1 del documento html

container.innerText = "Hola Mundo";
// se  muestra el mensaje en el primer cuadro

container.style.backgroundColor = "#000000";

container.style.color = "#1cb723";

container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = '<input type=”text” placeholder= ’escriba su texto’>';
//se muestra c1 con el color, texto y tamanio asignado

//innerText solo "recupera" texto como tal, mientras que innetHtml lo recupera en formato html

var containers = document.getElementsByClassName("c2");
//contiene los demas cuadros del documento

var contenedores = document.querySelectorAll(".c2");

contenedores.forEach((element) => {
    element.style.backgroundColor = "#009999"; //se mostraran los demas cuadros con el color asignado
    element.innerHTML = '<input type=”text” placeholder= ’Escriba su texto’>'; // innerHtml es a nivel de formato html como la etiqueta div
})

var boton = document.getElementById("btn-click");

boton.onclick = function (evt) {
    alert("Hola mundo");
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function (evt) {
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}

//despues de darle click al boton, se copia el texto digitado al cuadro de la par.

//innerText es algo que ya esta definido, en cambio value se le asigna en el momento por ejemplo en este caso desde el input del usuario



