// syntax
// if (){

// }
// let name = "";

// vars -> datatype 
// let name = "youssef";
// let age = 27;
// console.log(age);
// console.log(typeof age);
"use strict";


// let name1 ="ahmed" , name2 = "mohamed";
// console.log(name1);
// console.log(name2);

// name1 = "ali"
// console.log(name1);

// const SSN = "21211212121121";

// SSN = 12;
// console.log(SSN);
// console.log(typeof SSN);

// CASE SENSITIVE

// let Name = "youssef"; 
// console.log(name);
// accept letters , digits , symbols $, _ 
// Var Must not start with numbers
// reserved keywords

// 
// let double = true;
// let _Name = "youssef"; 
// console.log(_Name);

// alert("HI There")
// let name = null , city = "";
// let name = prompt("Enter your name");
// let city = prompt("enter city") ;

// "Hi My name is , and i'm from cairo "
// alert("Hi My name is "+name+" , and i'm from "+city)
// conditions
//  String  "" , ''  ``

// let name = prompt("Enter your name");
// let city = prompt("enter city") ;
// alert(`Hi My name is ${name}, and i'm from ${city} `)


// OPERATION

// let n1 = parseInt(prompt("n1"))  ;
// let n2 = parseFloat( prompt("n2") );
// let n1 = 15  ;
// let n2 = 5.6;

/*
    Casting (convert datatype from type to another )
    parseInt
    parseFloat
*/
// NaN => number -> not a number

// let n1 = parseInt(prompt("n1"))  ;
// let n2 = parseFloat( prompt("n2") );

// console.log(n1);
// console.log(typeof n1);
// console.log(n2);
// console.log(typeof n2);

// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);

// let n1 = prompt()

// console.log("h\nh");
// console.log("h\th");
/*
    enter num 1  5
    enter num 2  6
    5 + 6 = 11
    5 - 6 = -1 
    5 * 6 = 30
    5 / 6 = 
    5 % 6 = 5
*/

let n1 = +prompt("N1=") , n2 = +prompt("N2=");
let results = `
    ${n1} + ${n2} = ${n1+n2} \n
    ${n1} - ${n2} = ${n1-n2} \n
    ${n1} * ${n2} = ${n1*n2} \n
    ${n1} / ${n2} = ${n1/n2} \n
    ${n1} % ${n2} = ${n1%n2} \n`;
alert(results)