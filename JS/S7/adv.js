// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = [91,23,5,4,5];
// let arr3 = [1,2,25,43,5];


// let [num1,num2,,,num4] = [...arr]

// console.log(num1);
// console.log(num2);
// console.log(num4);
// console.log(arr);

// const stu = {
//     name:"youssef",
//     id:"88321",
// }



// let {name , id} = {...stu}

// console.log(name);
// console.log(id);
// let newArr = [...arr,...arr2,...arr3];
// console.log(newArr);

// arr2.forEach(elm => {arr.push(elm)})
// arr.push(...arr2,...arr3);

// console.log(...arr);



// !!

// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = [91,23,5,4,5];
// let arr3 = [1,2,25,43,5];

// // shallow compy
// // let newArr = arr;
// // deep copy
// let newArr = [...arr];

// newArr[0] = 1000


// console.log(arr);
// console.log(newArr);


// const stu = {
//     name:"youssef",
//     id:"88321",
// }


// const stu2 = {...stu}
// // const stu2 = stu
// stu2.name = "hamada";
// console.log(stu);
// console.log(stu2);


// let name = "sobieh";

// // console.log(...name);

// [...name].forEach(letter =>{
//     console.log(letter);
// })


// let arr = [
//     {
//         name:"abdallah",
//         age : 14
//     },
//     {
//         name: "hamada",
//         age : 80
//     },
//     {
//         name:"abdallah2",
//         age : 14
//     },
//     {
//         name: "hamada2",
//         age : 80
//     }
// ];




// const elementsHTML = arr.map(elm=>{
//     return `    
//         <div class="card">
//             <h1>${elm.name}</h1>
//             <h2>${elm.age}</h2>
//         </div>
//     `;
// })
// elementsHTML.forEach(elm=>{
//     document.body.innerHTML += elm
// })

// console.log(elementsHTML);


// document.body.innerHTML = elementsHTML.toString().replace(",","")
// let newArray = arr.map((value)=>{
//     // return value * 5 + 2
//     if (value % 2 == 0){
//         return value
//     }
//     return value + 1
// });

// // arr.forEach((elm,index)=>{
// //     arr[index] *= 5;
// // })


// console.log(arr);
// console.log(newArray);

// let arr = [0,1,2,3,9,4,5,6,7,8];

// let filteredArray = arr.filter((elm)=>{
//     return (elm > 3)
// })
// let findArray = arr.find((elm)=>{
//     return (elm == 12)
// })


// let reduced = arr.reduce((accumulator, currentValue)=>{
//     // console.log(ov);
//     // console.log(cv);
    
//     return accumulator + currentValue
// })
// console.log(arr);
// console.log(filteredArray);
// console.log(findArray);
// console.log(reduced);




// destructing
// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// let [color1,color2,...remaining] = [...colors];

// console.log(color1);
// console.log(color2);
// console.log(remaining);


// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// let [num1,[num2,num3],[,nested ]] = [...nestedArray];
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(nested);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArray = numbers.filter(elm => {
//     return (elm % 2 == 0)
// })

// let array2 = numbers.filter(elm => {
//     return (elm > 5)
// })

// console.log(evenArray);
// console.log(array2);

// let s = {name: 'Alice', age: 25};

// let {age,name} = {...s}
// console.log(age);
// console.log(name);


const people = [
    {name: 'Alice', age: 25},
     {name: 'Bob', age: 18}, 
     {name: 'Charlie', age: 30}
    ];
let overAge = people.filter(
    ({age})=>{
    return age >= 21;
})
console.log(overAge);








