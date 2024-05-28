//var gatos = 5;
//if (gatos >= 5) {
//  console.log("Son demasiados!");
//} else {
//    console.log("Muy pocos");
//}

//const MandarMensaje = () => alert(" TKM ")

//i = 12;
//while (i < 18){
//  alert("Menor de edad")
//  i++
//} 
//i = 2;
//do{
//  alert("Mayor de edad" + i)
//  i = i+1

//} while (i<18)

// var a = 5
// var b = 10
// if (a === 5) {
// let a = 4 // El alcance es dentro del bloque if
// var b = 15 // El alcance es global, sobreescribe a 10
// console.log(a) // 4, por alcance a nivel de bloque
// console.log(b) // 15, por alcance global
// }
// console.log(a) // 5, por alcance global
// console.log(b)

// function iniciar() {
//   var nombre = "Codo a Codo" // La variable nombre es una variable local creada por iniciar.
//   function mostrarNombre() { // La función mostrarNombre es una función interna, una clausura.
//   alert(nombre); // Usa una variable declarada en la función externa.
//   }
//   mostrarNombre()
//   }
//   iniciar()
// function creaSumador(x) {
//   return function(y) {
//   return x + y;
//   };
//   }
//   var suma5 = creaSumador(5);
//   var suma10 = creaSumador(10);
//   console.log(suma5(2)); // muestra 7
//   console.log(suma10(2)); // muestra 12

// const saludo = function (nombre) {
//   var mensaje = "Hola " + nombre
//   return mensaje
//   }
// var Persona = new Object()
// // Creamos las propiedades
// Persona.nombre = 'Lu'
// Persona.apellido = 'Iribarren'
// Persona.nacimiento = 2003
// // console.log("La persona es:", Persona.nombre, Persona.apellido,"y nacio en ",Persona.nacimiento)

// var Persona = new Object()
// Persona.nombre = 'Fede'
// Persona.apellido = 'Salame'
// Persona.nacimiento = '1880'
// console.log("La persona es:", Persona.nombre, Persona.apellido, "y nacio en ", Persona.nacimiento)

// function Person(name, age, sex) {
//   this.name = name
//   this.age = age
//   this.sex = sex
// }
// var rand = new Person("Rand McKinnon", 33, "M")
// var ken = new Person("Ken Jones", 39, "M")


// const Manager = {
//   name: "John",
//   age: 27,
//   job: "Software Engineer",
// };

// const Intern = {
//   name: "Ben",
//   age: 21,
//   job: "Software Engineer Intern",
// };

// function sayHi() {
//   console.log("Hola, mi nombre es ", this.name);
// }

// // agrega la función sayHi a ambos objetos
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;

// Manager.sayHi(); // Hola, mi nombre es John'
// Intern.sayHi(); // Hola, mi nombre es Ben'

// var cad= "Aprendiendo JavaScript "
// document.write(cad.repeat(1000))

// const texto1 = "¡Hola a todos!"
// var texto2 = "Otro mensaje de texto"
// var vacio = ""
// var texto3 = "123" // Cuidado, NO es un Number!
// // Declaración con el constructor new String
// const texto1 = new String("¡Hola a todos!")
// var texto2 = new String("Otro mensaje de texto")


//  let s_prim = "foo";
//  let edad = "25"
//  let s_obj = new String(s_prim)

//  console.log(s_prim) // Registra "string"
//  console.log(s_obj) // Registra "object"
//  console.log(edad)

// const info = document.getElementsByClassName(".info"