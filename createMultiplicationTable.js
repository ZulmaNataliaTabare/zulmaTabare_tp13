// Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde
// se pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes
// usar algunos de los ciclos o bucles aprendidos: for - while o dowhile. Para ayudar
// al equipo de desarrollo, tu responsabilidad será:
// 1. En la carpeta ya creada, crea el archivo createMultiplicationTable.js
// 2. Crear la función createMultiplicationTable() que no reciba ningún
// parámetro. Tendrá la responsabilidad de generar de manera automática la
// tabla de multiplicar del 1 al 10.
// 3. Lo ideal es que la función muestre al usuario algo así, con cada una de las tablas:

// Tabla de multiplicar x 1
// —--------------------------
// 1*1=1
// 1*2=2
// 1*3=3
// 1*4=4
// 1*5=5
// 1*6=6
// 1*7=7
// 1*8=8
// 1*9=9
// 1*10=10
// —--------------------------

// 4. La función solo debe ejecutar los console.log() internamente para mostrar las
// tablas solicitadas


function createMultiplicationTable() {

    for (let Tabla = 1; Tabla <= 10; Tabla++) {
        
        console.log(`Tabla de multiplicar x ${Tabla}`);
        console.log('--------------------------');

        for (let j = 1; j <= 10; j++) 
            console.log(`${Tabla} * ${j} = ${Tabla * j}`);
        

        console.log('--------------------------');
    }


}


createMultiplicationTable();