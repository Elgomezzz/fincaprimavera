// #1

// const contarCar = (text = "") =>
//     (!text)
//     ? console.warn("No ingresaste ningun texto")
//     : console.log(`El texto ingresado tiene ${text.length} caracteres`);

// contarCar(prompt("Ingrese el texto a contar"))

// #2

// const recortarTexto = (text = "", longi = undefined) =>
//     (!text)
//     ? console.warn("Sin texto")
//     : console.log(text.slice(0,longi));

// recortarTexto(prompt("Ingrese el texto:"), prompt("numero de veces a recortar:"))

// #3

// const contarPalabras = (texto = "", cortar = undefined ) =>
//     (!texto)
//     ? console.alert("Sin caracteres")
//     : (cortar === undefined)
//         ? console.log("no ingresaste el caracter a separar")
//         : console.log(texto.split(cortar));

// contarPalabras(prompt("Texto a ingresar:"),prompt("Caracter qe representara tu separador:"))


// #4

// const multiTxt = (texto = "", num = undefined) =>
//     (!texto)
//     ? console.alert("Sin caracteres")
//     : (num === undefined)
//         ? console.log("no ingresaste un caracter valido")
//         : console.log(texto.repeat(num));

// multiTxt(prompt("Palabra:"), prompt("Veces a multiplicar:"))


// #5

// const invTxt = (texto="") =>
//     (!texto)
//     ? console.log("No ingresaste ningun texto")
//     : console.log(texto.split("").reverse().join(""));

// invTxt(prompt("Ingrese el texto que desea invertir:"))

// #6

// const contarVTexto = (txt1 ="", txt2) =>
//     (!txt1)
//     ? console.log("Sin texto")
//     : (txt1.length <= 1)
//         ? (txt2 === undefined)
//         : (!txt2)
//             ? console.log("Sin palabra a buscar")
//             : console.log(txt1.split(txt2).length -1);
// contarVTexto(prompt("Ingrese el respectivo texto"),prompt("Ingrese la palabra a buscar"))
