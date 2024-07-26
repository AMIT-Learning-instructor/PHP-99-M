// Arrays

// const names = ["mahmoud", "abdallah", "sobieh"];
// console.log(names);
// names[4] = "aly";
// // names = [];
// console.log(names);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// const names = [];
// const names = Array();
// console.log(names);
// // push
// names.push("youssef1");
// names.push("youssef2");
// names.push("youssef3");
// names.push("youssef4");
// names.push("youssef5");
// // console.log(names);
// let result = names.push("Abbas", "sobieh");
// // console.log(names);
// // console.log(result);
// // pop
// let poped = names.pop();
// // console.log(names);
// // console.log(poped);
// // unshift
// names.unshift("sobieh");
// // console.log(names);
// // names.shift();
// // console.log(names);
// // splice
// // slice

// let v = names.slice(1, 4);
// console.log(v);
// console.log(names);

// v = names.splice(4, 0, "abdallah", "mahmoud", "mosaab");
// console.log(v);
// console.log(names);

// const transactions = [];
// let balance = 0;
// while (true) {
//   let chose = +prompt("enter 1 to deposit, 2 for withdraw, 0 for end");
//   if (chose == 0) break;
//   let amount = +prompt("enter amount");
//   if (chose == 1) {
//     balance += amount;
//     transactions.push(amount);
//   } else if (chose == 2) {
//     balance -= amount;
//     transactions.push(-amount);
//   }
// }
// let message = `Your balance is ${balance} \n`;
// for (const iterator of transactions) {
//   message += `transaction : ${iterator} \n`;
// }
// console.log(message);
// alert(message);

// let transactions = [];
// while (true) {
//   let transactionType = +prompt("1- for deposit\n2- for withdraw\nfor end any");
//   if (transactionType == 1) {
//     let amount = +prompt("enter amount");
//     transactions.push(amount);
//   } else if (transactionType == 2) {
//     let amount = +prompt("enter amount");
//     transactions.push(-amount);
//   } else {
//     break;
//   }
// }
// let message = "",
//   balance = 0;
// for (const item of transactions) {
//   balance += item;
//   // message += "Transaction With :" + balance + " $\n";
//   message += `Transaction With : ${item} $ - balance ${balance} \n`;
// }

// message += `Your Balance ${balance}`;

// alert(message);

// function test(n1, n2) {
//   return [n1 + 10, n2 + 10];
// }

// console.log(test(15, 20));
let transactions = [];

function makeTransaction(oldTransaction) {
  let transactionType = +prompt("1- for deposit\n2- for withdraw\nfor end any");
  if (transactionType == 1) {
    let amount = +prompt("enter amount");
    oldTransaction.push(amount);
  } else if (transactionType == 2) {
    let amount = +prompt("enter amount");
    oldTransaction.push(-amount);
  } else {
    return false;
  }
  return true;
}

const makeMessage = (transactions) => {
  let balance = 0,
    message = "";
  for (let item of transactions) {
    balance += item;
    message += `Transaction With : ${item} $ - balance ${balance} \n`;
  }
  return [balance, message];
};
while (true) {
  let successTransaction = makeTransaction(transactions);
  if (!successTransaction) {
    break;
  }
}
let result = makeMessage(transactions);
console.log(result);
