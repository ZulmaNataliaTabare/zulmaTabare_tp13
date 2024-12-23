
const prompt = require('prompt-sync')();


// 1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un
// repositorio local y vincularlo con un repositorio remoto cuyo nombre debe
// tener la siguiente nomenclatura: nombreApellido_tp13
// 2. Crear un archivo llamado bankBalance.js
// 3. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
// tomando en cuenta que los depósitos serán representados por valores
// positivos y los retiros por valores negativos.

let operaciones = [5000, -2500, 158000, 65000, 47000, -35000, 88000, -25000, 115500]

// 4. Crear la función calculateBalances() que reciba como parámetro el array
// creado. La función tendrá la responsabilidad de calcular y devolver el saldo total
// de depósitos, el saldo actual de retiros y el saldo actual del cliente

function calculateBalances(operaciones) {

    //con Filter() creo un array nuevo con todos los valores positivos/negativos y con Reduce() los reduzco a un solo valor.   

    let depósitos = operaciones.filter(num => num > 0);
    let saldoTotalDepósitos = depósitos.reduce((acum, num) => acum + num, 0);
    let mensajeSaldoCliente = `El monto total de los depósitos es de: $${saldoTotalDepósitos}`;


    let retiros = operaciones.filter(num => num < 0);
    let saldoActualRetiros = retiros.reduce((acum, num) => acum + num, 0);
    let mensajeRetiroCliente = `El monto total de los retiros es de: $${Math.abs(saldoActualRetiros)}`;


    let saldoActualCliente = (saldoTotalDepósitos + saldoActualRetiros);
    let mensajeSaldoActualCliente = `su saldo actual en la cuenta es de: $${saldoActualCliente}`;

    return {
        mensajeSaldoCliente,
        mensajeRetiroCliente,
        mensajeSaldoActualCliente
    };

}

// console.log(calculateBalances(operaciones));


// 5. Crear otra función llamada bankBalance() que reciba como parámetros el
// nombre y el apellido del cliente así como el array que contiene las operaciones
// bancarias. Esta función tendrá la responsabilidad de retornar el nombre y
// apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el
// saldo actual


function bankBalance(nombre, apellido, operaciones) {

    let nombreApellido = `${nombre} ${apellido}`;


    let depósitos = operaciones.filter(num => num > 0);
    let saldoTotalDepósitos = depósitos.reduce((acum, num) => acum + num, 0);
    let mensajeSaldoCliente = `El monto total de los depósitos es de: $${saldoTotalDepósitos}`;


    let retiros = operaciones.filter(num => num < 0);
    let saldoActualRetiros = retiros.reduce((acum, num) => acum + num, 0);
    let mensajeRetiroCliente = `El monto total de los retiros es de: $${Math.abs(saldoActualRetiros)}.`;


    let saldoActualCliente = (saldoTotalDepósitos + saldoActualRetiros);
    let mensajeSaldoActualCliente = `su saldo actual en la cuenta es de: $${saldoActualCliente}.`;

    return {
        nombreApellido,
        mensajeSaldoCliente,
        mensajeRetiroCliente,
        mensajeSaldoActualCliente
    };
    
}


console.log(bankBalance("Gloria", "Medina", operaciones));


let balances = bankBalance("Gloria", "Medina", operaciones);

console.log(`Estimada ${balances.nombreApellido}:`);
console.log(balances.mensajeSaldoCliente);
console.log(balances.mensajeRetiroCliente);
console.log(`Por lo tanto, ${balances.mensajeSaldoActualCliente}`);

module.exports = bankBalance


