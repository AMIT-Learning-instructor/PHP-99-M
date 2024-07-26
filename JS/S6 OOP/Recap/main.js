// console.log("HI");
// ? Vars

// var x = "ahmed";

// var x = 20;
// console.log(window.x);

// console.log(window);

// let name;
// console.log(name);

// name = "ahmed";
// console.log(name);

// const PI = 3.145;

// PI = 5;
// console.log(PI);

// let _n$am

// CamelCase

// let studentName;
// let counterTime;

// // Pascal case
// class MyCustomObject{}
// // snake case
// let student_name

// let name = "youssef";
// // name = "youssef";
// // name = `youssef`;

// console.log("hi my name is "+name+" ");
// console.log(`hi my name is ${name}`);

// let name;

// let age = null;

// console.log(name);
// console.log(age);

// let test = Symbol("test");

// console.log(test == "test");

// const car = {
//   model: "Elantra",
//   year: 2009,
//   manufacture: "Hyundai",
// };

// car.plate = "1324";
// console.log(car);

// let x = 0;

// console.log(x++);
// console.log(++x);

// console.log("5 > 3" + (5 > 3));
// console.log("5 < 3" + (5 < 3));
// console.log("5 <= 3" + (5 <= 3));
// console.log("5 >= 3" + (5 >= 3));
// console.log("5 != 3" + (5 != 3));
// console.log("5 == 5" + (5 === "5"));

// let num = "12345";
// num = Number(num);
// console.log(num);

// let num1 = 11;

// if (num1 % 2 == 0) {
//   // become an even number
//   console.log("Even");
// } else if (num1 >= 11) {
//   console.log("Odd grater than 10");
// } else {
//   console.log("ODD");
// }

// if (day == "fir"){

// }else if (day == "Sat"){

// }else if (day == "Sun"){

// }
// let day = "tue";

// switch (day) {
//   case "fri":
//     //
//     console.log("fri");
//     break;
//   case "sat":
//     console.log("sat");
//     break;
//   case "mon":
//     console.log("inside switch mon");
//     break;

//   default:
//     console.log("from default");
//     break;
// }

// Logical Oration
// let x = 15,
//   y = 12;
// if (x > y || y > 10) {
//   console.log("working");
// }
// console.log(!(x > y));
// if (!(x > y)) {
//   console.log("working");
// }

// let name = "ahmed";

// let fullName = name ?? "youssef";

// console.log(fullName);

// let i = 0;
// while (i++ < 100) {
//   //   i++;
//   console.log(i);
// }

// let i = 100;
// do {
//   console.log(i++);
// } while (i < 100);

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// class Car {
//   constructor(model, type) {
//     this.model = model ?? new Date().getFullYear();
//     this.name = `Car-${model}`;
//     this.type = type;
//   }
//   info() {
//     console.log(this);
//   }
// }

// let car = new Car(null, "sedan");
// let car2 = new Car(undefined, "LEMO");

// // car.info();
// car.name = "22222222";
// car.info();

// car2.info();

// Student
// list of courses

// registerCourse (course)

// class Student {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//     this.courses = [];
//   }
//   info() {
//     console.log(`name: ${this.name}\nphone:${this.phone}`);
//     this.coursesInfo();
//   }
//   newCourses(course) {
//     this.courses.push(course);
//   }
//   coursesInfo() {
//     this.courses.forEach((elm) => {
//       console.log(`Course ${elm}`);
//     });
//   }
// }

// const stu1 = new Student("youssef", "11111111");
// stu1.newCourses("c++");
// stu1.newCourses("PHP");
// stu1.newCourses("JS");
// stu1.info();

// console.log(stu1);
