"use strict";

//Ejercicio 1

let nombrePila = "Olesya";
console.log(nombrePila);


//Ejercicio 2
// nombrePila = "Ole";
// console.log(nombrePila)

//Ejercicio 3
//Me dice si comento la variable que no está definida

let operador1=3;
let operador2=5;
// console.log(operador1+operador2)
let resultado=0;

resultado = operador1+operador2;
console.log(resultado)

// operador1=67;


//Ejercicio 1 del profe
const PI = 3.1416;
let radio=2;
let circulo = 0;


circulo = PI*radio*radio;
//Mostramos por template literals 
console.log(`circulo = Π * ${radio}² = ${circulo}`);


//Ejercicio 2 del profe
//Nodos no cambia nunca
const ej2Profe = document.querySelector(".area-triangulo");
const res2Profe = document.querySelector("#resultado2");

//(".bloque2>h2+ol+h2+ol>li:nth-child(2)") = (".area-triangulo")

//Declaraciones de Funciones
const areaTriangulo = () => {
    //variables, cuando solo lo vas a utilizar aquí
    let aTriangulo = 0;
    let base = 3, altura = 2;
    //Los datos me los da el usuario 
    base = window.prompt("Dame la base"); //prompt devuelve un string
    //Number convierte cualquier cosa en número 
    base =Number(base);
    altura = prompt("Dame la altura");
    altura = Number(altura);

    aTriangulo = (base * altura) / 2;
    res2Profe.innerHTML = `<code>
    A(${base}*${altura}/2)= ${aTriangulo}
    <code/>`;   

}

//Eventos
ej2Profe.addEventListener(
    "click",
    areaTriangulo
);


let base=3
let altura=6
let triangulo=0

triangulo = 3*6/2
console.log(triangulo)





//Ejercicio 3 del profe
//nodos
//Elemento li del html del tercer ejercicio del profe
const alturaLi = document.querySelector(".persona-altura");
//Nodo en el que va la respuesta de este ejercicio
const res3Profe = document.querySelector("#resultado3");

//Declaración de funciones

const esPersonaAlta = () => {
    let alt = prompt("Dame tu altura en centímetros"); //Prompt() devuelve un string
    console.log(`alt (${alt}) es de tipo ${typeof alt}`);
    //Quiero convertir el string en número
    alt = Number(alt);
    
    
    //Estructura condicional 
    if(alt>200){
        res3Profe.innerHTML=`La persona de ${alt} cm es alta.`;
    }else{
        res3Profe.innerHTML=`La persona de ${alt} cm es baja.`;
    }

}

//Evento
alturaLi.addEventListener( //Siempre lleva mínimo dos parámetros
    "mouseover", //Evento al pasar el ratón por encima 
    esPersonaAlta

);











