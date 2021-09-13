const dinero = 100;
const totalApagar = 300;
const tarjeta = false;
const cheque =false;

if (dinero >= totalApagar) {
  console.log("Si podemospagar");
} else if (cheque) {
  console.log("Si tengo un cheuqe");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo la targeta");
} else {
  console.log("Fondos Insuficientes");
}
