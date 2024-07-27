// class Person{
//     #SSN;
//     #address;
//     constructor(pname,ssn){
//         this.name = pname;
//         this.SSN = ssn
//     }
//     info(){
//         console.log(`${this.name} - ${this.#SSN} - ${this.#address ?? ''}`);
//     }
//     get SSN(){
//         return this.#SSN;
//     }
//     set SSN(newSSN){
//         if(newSSN != this.#SSN){
    
//             this.#SSN = newSSN;
//         }
//     }
//     set address(newAdd){
//         this.#address = newAdd;
//     }
// }

// let sobieh = new Person("sobieh","30123456723423");
// // sobieh.#SSN
// // console.log(sobieh.#SSN);
// sobieh.info();
// // sobieh.SSN = "1234"
// sobieh.address = "Elsayeda"
// console.log(sobieh.SSN);
// sobieh.info();
// // console.log(sobieh.SSN);




class Account {
    #accNo;
    #balance;
    #SSN;
    #createdAt;
    #PIN;
    constructor(fullname , ssn) {
        this.fullname = fullname;
        this.#SSN = ssn;
        this.#balance = 0;
        this.#createdAt = Date.now();
        this.#accNo = "AC-"+(parseInt(Math.random()*10000));
        this.#PIN = "0000";
    }

    get accountNumber(){
        return this.#accNo;
    }

    accountStatement(){
        console.log(`${this.#accNo} - ${this.fullname} - ${this.#balance}$ `);
    }
    get SSN (){
        return this.#SSN;
    }
    get balance (){
        return this.#balance;
    }
    #checkPIN(pin){
        return this.#PIN == pin;
    }

    withdraw(amount,pin){
        if(! this.#checkPIN(pin)){
            console.error("invalid PIN");
            return;
        }
        if (amount > this.#balance){
            console.error("Not Enough");
            return;
        }
        this.#balance -= amount;
        console.log("completed , "+this.#balance);
    }

    changePIN(newPIN,oldPIN){
        if(! this.#checkPIN(oldPIN)){
            console.error("invalid PIN");
            return;
        }
        this.#PIN = newPIN
    }

    deposit(amount,pin){
        if(! this.#checkPIN(pin)){
            console.error("invalid PIN");
            return;
        }
        if (amount <= 0){
            console.error("invalid amount");
            return;
        }
        this.#balance += amount;
        console.log("completed , "+this.#balance);
    }
}

const a1 = new Account("youssef Abbas","12312312312");
// a1.accountStatement()
// console.log();
a1.deposit(1000,"0000")
a1.withdraw(2000,"0000")
a1.changePIN("1234","0000")
a1.withdraw(1000,"0000")
a1.deposit(1240,"0000")

a1.accountStatement()