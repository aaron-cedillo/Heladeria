let money = [3],
  com;
let precio = [15, 15, 25, 45, 45, 50];

let producto = [
  "Paleta de uva",
  "Paleta de Fresa",
  "Paleta de crema",
  "Bote de 1 L de Helado de Yogur",
  "Bote de 1 L de Helado de fresa",
  "Bote de 1 L de Helado de napolitano",
];
let nombre = ["Luis", "Blanca", "Valenka"];

money[0] = prompt("Ingresar monto con el que cuenta Luis");
money[1] = prompt("Ingresar monto con el que cuenta Blanca");
money[2] = prompt("Ingresar monto con el que cuenta Valeska");

for (let i = 0; i < 3; i++) {
  if (money[i] > 49) {
    com = prompt(
      `El dinero con el que cuenta ${nombre[i]} es  ${money[i]}, lamentablemente solo contamos con el siguiente producto: \n 1.  ${producto[5]} $ ${precio[5]}  \n Elige tu helado!`
    );
    if (com == 1) {
      money[i] = money[i] - precio[5];
    } else {
      alert(` ${nombre[i]} INTENTALO DE NUEVO \n`);
    }
    alert(`El cambio de ${nombre[i]} es $ ${money[i] + "pesos"} \n`);
  }
  if (money[i] < 50 && money[i] > 44) {
    com = prompt(
      `El dinero con el que cuenta  ${nombre[i]} es  ${money[i]}, lamentablemente solo contamos con el siguiente producto: \n 1. ${producto[3]} $ ${precio[3]} \n 2. ${producto[4]} $ ${precio[4]} \n Elige tu helado! \n`
    );
    if (com == 1) {
      money[i] = money[i] - precio[3];
    } else if (com == 2) {
      money[i] = money[i] - precio[4];
    } else {
      alert(` ${nombre[i]} INTENTALO DE NUEVO \n`);
    }
    alert(`El cambio de ${nombre[i]} es $ ${money[i] + "pesos"} \n`);
  }
  if (money[i] < 45 && money[i] > 24) {
    com = prompt(
      `El dinero con el que cuenta  ${nombre[i]} es  ${money[i]}, lamentablemente solo contamos con el siguiente producto: \n1. ${producto[2]} $ ${precio[2]} \n Elige tu helado! \n`
    );

    if (com == 1) {
      money[i] = money[i] - precio[2];
    } else {
      alert(`${nombre[i]} Vuelve pronto \n`);
    }
    alert(`El cambio de ${nombre[i]} es $ ${money[i] + "pesos"} \n`);
  }
  if (money[i] < 25 && money[i] > 14) {
    com = prompt(
      `El dinero con el que cuenta   ${nombre[i]} es  ${money[i]}, lamentablemente solo contamos con el siguiente producto: \n1. ${producto[0]} $ ${precio[0]} \n2. ${producto[1]} $ ${precio[1]} \nElige tu helado!\n`
    );
    if (com == 1) {
      money[i] = money[i] - precio[0];
    } else if (com == 2) {
      money[i] = money[i] - precio[1];
    } else {
      alert(`${nombre[i]} Vuelve pronto\n`);
    }
    alert(`El dinero con el que cuenta ${nombre[i]} es $ ${money[i] + "pesos"} \n`);
  }
}

document.write("El cambio de Luis es: " + money[0] + "pesos" + "<br><br>");

document.write("El cambio de Bianka es: " + money[1] + "pesos" + "<br><br>");

document.write("El cambio de Valeska es: " + money[2] + "pesos" + "<br><br>");

document.getElementById("LuisH").innerHTML = money[0];
document.getElementById("biankaH").innerHTML = money[1];
document.getElementById("valeskaH").innerHTML = money[2];
