// var SessionName = "s7 BOM";

// var SessionName = "s8 BOM";
// console.log(window);
// window.setInterval()
// setInterval()

// const welcomeMessageInterval = setInterval(() => {
//   console.log("Hi From SetInterval");
// }, 500);

// const timeout = setTimeout(() => {
//   clearInterval(welcomeMessageInterval);
// }, 2000);

// clearTimeout(timeout);

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.scrollY);
// addEventListener("", (event) => {
//   console.log("wheel " + event);
//   console.log("scrollY " + scrollY);
// });

// window.addEventListener("resize", () => {
//   console.log(window.screenY);
//   console.log(window.screenX);
// });

// addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.key == "q") {
//     window.close();
//   }
//   if (e.key == "Enter") {
//     window.open("/");
//   }
//   if (e.key == "r") {
//     window.resizeTo(500, 500);
//   }
// });
// window.resizeTo(500, 500);

// const fClink = addEventListener("click", () => {
//   open("http://www.google.com");
//   removeEventListener("click", fClink);
// });

// document.getElementById("back").addEventListener("click", () => {
//   //   window.history.back();
//   window.scrollBy({
//     top: 10,
//     // left: 100,
//     behavior: "smooth",
//   });
// });

// let name = localStorage.getItem("name");
// const input = document.getElementById("name");
// const saveBtn = document.getElementById("save");
// const clearBtn = document.getElementById("clear");
// const nameTitle = document.getElementById("name-title");
// nameTitle.innerHTML = name;

// saveBtn.addEventListener("click", () => {
//   name = input.value;
//   input.value = "";
//   nameTitle.innerText = name;

//   localStorage.setItem("name", name);
// });

// const students = [
//   {
//     name: "youssef",
//     phone: "123123123",
//   },
//   {
//     name: "youssef2",
//     phone: "123123123",
//   },
//   {
//     name: "youssef3",
//     phone: "123123123",
//   },
// ];

// // localStorage.setItem("students", JSON.stringify(students));

// let sstorage = JSON.parse(localStorage.getItem("students"));

// sstorage.pop();
// localStorage.setItem("students", JSON.stringify(sstorage));
// console.log(sstorage);

// localStorage.removeItem("students");

// sessionStorage.setItem("name", "youssef");
// console.log(sessionStorage.getItem("name"));

// document.cookie = "username=John Doe; expires=20 july 2024 22:40:00 UTC";
