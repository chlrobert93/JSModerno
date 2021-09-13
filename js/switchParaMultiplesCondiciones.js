// Switch case

const metodoPago = "efectivo";

//Entre parentesis lo que deseamos comprobar
switch (metodoPago) {
  case "efectivo":
    pagar();
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log(
      "Aúnno has selecionado un método de pago o método de pago no soportado"
    );
}

function pagar() {
  console.log("Pagando...");
}
