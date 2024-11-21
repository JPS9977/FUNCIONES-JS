// function saludar(){
//     console.log(`HOLA MUNDO`)
// }

// saludar()


// function saludarReturn(){
//         return `Hola mundo`
// }

// let mensaje = saludarReturn()

// console.log(mensaje)


// function sumar(a, b){
//     return a + b;
// }

// let suma = sumar(2, 3)

// console.log(suma)

// let variableGlobal = `Hola soy una variable global`

// function miFuncion(){
//     let variableLocal = `Soy una variable local`
//     console.log(variableGlobal)
//     console.log(variableLocal)
// }

// miFuncion()

//FUNCIONES FLECHA (ARROW FUNCTIONS)

// const sumar =(a, b) => a + b;
// const suma=sumar(5,2)
// console.log(suma)

// const restar = (a, b) => {
//     return a - b
// }

// const resta = restar(5,2)
// console.log(resta)

// const concatenarMensaje = (a, b) => `${a}-${b}`

// function funcionPrincipal(arr, funcion){
//     let resultado = funcion(arr[0], arr[1])
//     return resultado
// }

// const nombres = [`Luis`, `Carlos`]

// const mensaje = funcionPrincipal(nombres,concatenarMensaje)

// console.log(mensaje)


//HOISTING

// let suma = sumar(5,8)
// console.log(suma)

// function sumar(a,b){
//     return a + b
// }

// const restar = (a,b) => a - b
// let resta = restar(6,5)
// console.log(resta)


////EJERCICIO*

// let numeros = [10, 20, 30, 40, 50];

// function calcularPromedio(nums){
//     const suma = nums.reduce((total, num) => total + num, 0)
//     return suma / nums.length
// }

// console.log(calcularPromedio(numeros));


// const arrLetras =[]
// const arrNums =[]
// function menu(funcion, mostrarData){
//     let valor;
//     do {
//        valor = prompt("Introduzca un valor(0 para terminar): ")
//        console.log(valor)
//        if (valor === "0") console.log("se finalizó el programa")
//     } while(valor !== "0")
// }

// function calificarValor(valor){

//     if(isNaN(valor)){
//         arrLetras.push(valor)
//     } else{
//         arrLetras.push(valor)
//     }

// }

// function mostrarData(){
//     console.log(`Se finalizó el programa`)
//     console.log(arrLetras)
//     console.log(arrNums)
// }


// menu(calificarValor)


// let password = `123456`
// let repPassword = `123456`

// let user = `JP97`
// let userEnDB = `JP97`

// console.log(user === userEnDB && password === repPassword)

// const comprobarUser = !userEnDB.includes(user) && password === repPassword

// const edad = 10

// let comprobarEdad = edad >= 0 && edad < 99

// let estadoCivil = `casado`

// let CompEstCivil = estadoCivil === 'casado'  || estadoCivil === '`soltero'

// console.log(CompEstCivil)


// if(comprobarUser){
//     console.log("Usuario y contraseña correctos");
// }else{
//     console.log("No se permite el registro porque el usuario ya existe o la contraseña es incorrecta");
// }

// if(comprobarEdad){
//     console.log(`Edad aceptada`)
// }else if(edad < 0){
//     console.log("la edad no puede ser negativa")
// }else if(edad > 99){
//     console.log(`La edad no puede ser mayor a 99`)
// }else{
//     console.log(`Por favor verifique el tipo de dato "edad"`)
// }


// let dia = 1
// dia = Number(dia)
// switch (dia) {
//         case 1:
//             dia = "Lunes";
//         break
//         case 2:
//             dia = "Martes";
//         break
//         case 3:
//             dia = "Miércoles";
//         break
//         case 4:
//             dia = "Jueves";
//         break
//             case 5:
//             dia = "Viernes";
//         break
//         default:
//             dia = "Número no válido";
//         break
// }
// console.log(dia);

// const diasDeLaSemanaHab = {
//     1: "Lunes",
//     2: "Martes",
//     3: "Miércoles",
//     4: "Jueves",
//     5: "Viernes"
// }

// console.log(`Usando objetos: ${diasDeLaSemanaHab[dia]}`);



// let password2 = prompt('Ingrese su contraseña')

// let trys = 3

// while (trys > 1){
//     if(password2 === '123456'){
//     console.log(`La contraseña es correcta`) 
//     break
//     }
//     trys--
//     console.log(`Intentos restantes: ${trys}`)
//     password2 = prompt(`Contraseña errónea, intente nuevamente`)
// }

// if (trys === 1 ){
//     console.log('Su cuenta ha sido bloqueada');
// }


// let entrada;
// do {
// entrada = prompt("Introduce una palabra (escribe 'stop' para detener):");
// // Solicita la entrada del usuario
// console.log("Has introducido:", entrada); // Muestra lo que se introdujo
// } while (entrada.toLowerCase() !== "stop"); // Comprueba si la entrada es "stop"

// console.log(obj.apellido);
// console.log(obj['edad']);

// for(key in obj){
//     console.log(`${key}: ${obk[key]}`);
// }


const menos = document.querySelector('#menos')

const mas = document.querySelector('#mas')

const resultado = document.querySelector('#resultado')

let contador = 0
menos.addEventListener('click', function(){
    console.log(contador)
    resultado.innerText = --contador;
})

mas.addEventListener('click', function(){
    console.log(contador)
    resultado.innerText = ++contador;
})

