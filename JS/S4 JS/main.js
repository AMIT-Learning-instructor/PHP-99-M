// const stu1 = null;
// const stu2 = {
//   name: "Youssef",
//   address: "maddi",
//   job: "SE",
//   info() {
//     console.log(`${this.name}`);
//   },
// };

// stu2.address
// stu1.info()
// console.log(stu1.info;
// const students = [
//   {
//     name: {
//       fname: "Youssef",
//       lname: "Abbas",
//     },
//     address: "maddi",
//     job: "SE",
//     phones: ["", ""],
//     info() {
//       console.log(`my name is ${this.name}\nand my address is ${this.address}`);
//     },
//   },
//   {
//     name: "Youssef2",
//     address: "maddi2",
//     job: "SE",
//     phones: ["", ""],
//     info() {
//       console.log(
//         `my name is ${students[0].name}\nand my address is ${this.address}`
//       );
//     },
//   },
// ];
// console.log(students);
// stu = {};
// // ? change
// stu.name = "Sobieh";

// //! ADD

// stu.age = 26;
// // console.log(stu["name"]);
// console.log(stu);
// console.log(stu.name);
// let ob = {};
// let ob = new Object();

// console.log(ob);
// console.log(typeof ob);

// const s = {
//   name: "Youssef2",
//   address: "maddi2",
//   job: "SE",
//   phones: ["", ""],
//   info() {
//     console.log(
//       `my name is ${students[0].name}\nand my address is ${this.address}`
//     );
//   },
// };
// console.log(s);
// s.phones = null;
// delete s.phones;
// console.log(s);

// element by id
// document.getElementById("f-1")
// element by classs name
// console.log(document.getElementsByClassName("main"));

// const elements = document.getElementsByClassName("main");
// for (const iterator of elements) {
//   iterator.style.color = "red";
//   console.log(iterator);
// }

// const elements = document.getElementsByTagName("li");
// console.log(elements);

// const element = document.querySelector("#f-1");
// console.log(element);
// const element = document.querySelectorAll(".main");
// console.log(element);

// const elem = document.getElementById("result");

// elem.innerHTML = "hi there, this text from js code";
// elem.style.backgroundColor = "green";
// elem.style.color = "#fff";
//elem.innerHTML = `<li> asdfds </li>`
// const ulElement = document.getElementById("list");

// const todoTasks = ["T1", "T2", "T3"];
// for (const iterator of todoTasks) {
//   ulElement.innerHTML += `<li>${iterator}</li>`;
// }

// ForEach

// const todoTasks = ["T1", "T2", "T3"];
// todoTasks.forEach((item, index) => {
//   ulElement.innerHTML += `<li>${item}</li>`;
//   console.log(item);
//   console.log(index);
// });

// Create ELements
// const body = document.body;
// console.log(body);
// CREATE ELEMENT

// const divElement = document.createElement("div");
// divElement.innerText = "Hi From JS";
// divElement.className = "main";
// // const divElement2 = structuredClone(divElement);
// // divElement2.innerText = "Hi2";
// let divElement2 = document.createElement("div");
// divElement2.innerText = "Hi From JS";
// divElement2.className = "main-div";
// // divElement.appendChild("<h1>hi</h1>");
// body.append(divElement, divElement2);
// // body.appendChild(divElement);
// // console.log(divElement);

// // document.getElementsByTagName("style")[0].innerText = `.main {color:red;}`;

// let an = document.querySelector("#an");
// an.href = "http://127.0.0.1";
// document.querySelector("img").src = "http://127.0.0.1";
// document.querySelector("input").value = "Youssef Ababs";
// document.querySelector("input").placeholder = "Youssef Ababs";
// console.log(an.getAttribute("data-name"));
// console.log(an.attributes);

// // an.setAttribute("class", "1");
// an.classList.add("test");
// an.classList.remove("test");

// const body = document.body;
// const div = document.createElement("div");
// const img = document.createElement("img");
// const h1 = document.createElement("h1");
// const p = document.createElement("p");

// img.src =
//   "https://fastly.picsum.photos/id/240/200/300.jpg?grayscale&hmac=94QIgy57wEVOqD2W7HHX3Xd4sx8ECZ0FjJUEBcL1TSw";
// h1.innerText = "Test Post";
// p.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente ullam aut sed delectus accusamus eligendi excepturi voluptatum, ratione exercitationem, fugit rerum pariatur, beatae amet saepe eveniet. Officia, amet eius.";
// div.append(h1, img, p);
// body.appendChild(div);

// const btn = document.getElementById("btn");
// console.log(btn);
// let visible = false;
// btn.addEventListener("click", () => {
//   //  (condition) ? 'true' : 'false'
//   //   visible = !visible;
//   //   div.style.display = visible ? "none" : "block";
//   //   if (visible) {
//   //     // body.remove(h1, img, p)
//   //     div.style.display = "none";
//   //   } else {
//   //     div.style.display = "block";
//   //   }
//   //   visible = !visible;
//   div.style.display = "block";
// });

// btn.addEventListener("dblclick", () => {
//   div.style.display = "none";
// });

// btn.addEventListener("mouseenter", () => {
//   btn.classList.add("active");
// });
// btn.addEventListener("mouseleave", () => {
//   btn.classList.remove("active");
// });

// const inp = document.getElementById("inp");
// const h = document.getElementById("h");

// inp.addEventListener("keydown", (event) => {
//   console.log(event.key);
//   h.innerText = inp.value;
// });
