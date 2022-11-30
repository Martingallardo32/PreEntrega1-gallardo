
function pedirDatos() {
  nombre = prompt("insertar nombre");
  apellido = prompt("insertar apellido");
  resultado = "Bienvenido a Malbec," + " " + nombre + " " + apellido;
  alert(resultado);
}
pedirDatos();

// DEFINIR VARIABLES //
let seleccionarTrago;
let seleccionarCantidad;
let precio;
let i;
let total = 0;

//PEDIDO//
seleccionarTrago = prompt(`Que vamos a tomar:
        1 - Fernet
        2 - Vino 
        3 - Cerveza 
        4 - Vodka 
        5 - Trago de Autor
        0 - Salir`);

while (seleccionarTrago) {
  if (seleccionarTrago == "1") {
    seleccionarTrago = "Fernet";
    alert("Pediste Fernet");
  } else if (seleccionarTrago == "2") {
    seleccionarTrago = "Vino";
    alert("Pediste Vino");
  } else if (seleccionarTrago == "3") {
    seleccionarTrago = "Cerveza";
    alert("Pediste Cerveza");
  } else if (seleccionarTrago == "4") {
    seleccionarTrago = "Vodka";
    alert("pediste Vodka");
  } else if (seleccionarTrago == "4") {
    seleccionarTrago = "Trago de autor";
    alert("Pediste Trago de autor");
  } else if (seleccionarTrago == "0") {
    seleccionarTrago = "Salir";
    alert("No quiero beber");
  } else seleccionarTrago = seleccionarTrago;
}
seleccionarTrago();



// seleccionarCantidad = prompt(`Cuantos tragos quieres?`);

// while (seleccionarTrago != "0") {
//   switch (seleccionarTrago) {
//     case 1:
//       seleccionarCantidad = Number(prompt("Cuantos Fernet quieres"));
//       funcionTotal();
//       break;
//     case 2:
//       seleccionarCantidad = Number(prompt("Cuantos Vino quieres"));
//       funcionTotal();
//       break;
//     case 3:
//       seleccionarCantidad = Number(prompt("Cuantas Cerveza quieres"));
//       funcionTotal();
//       break;
//     case 4:
//       seleccionarCantidad = Number(prompt("Cuantos Vodka quieres"));
//       funcionTotal();
//       break;
//     case 5:
//       seleccionarCantidad = Number(prompt("Cuantos Tragos de autor quieres"));
//       funcionTotal();
//       break;
//     default:
//   }
// }
// seleccionarCantidad();

// function funcionTotal() {
//   cantidad = seleccionarCantidad;
//   precio = seleccionarTrago;
//   total = cantidad * precio;
//   alert(total);
// }
