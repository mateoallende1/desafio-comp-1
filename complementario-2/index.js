const criptos = [
{ pair: "BTC/USD", price: 0 },
{ pair: "ETH/USD", price: 0 },
{ pair: "LINK/USD", price: 0 },
]
function asignarPrecio(i) {
let newPrice = parseFloat(prompt(`Ingrese precio ${criptos[i].pair}`));
criptos[i].price = newPrice;
}
for (let i = 0; i < criptos.length; i++) {
asignarPrecio(i);
}
for (let i = 0; i < criptos.length; i++) {
alert(`El precio de ${criptos[i].pair} es ${criptos[i].price}`);
}