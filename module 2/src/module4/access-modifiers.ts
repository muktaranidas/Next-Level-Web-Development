// class BankAccount {
//   public id: number;
//   public name: string;
//   private balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }

//   getBalance() {
//     console.log(`My Current Balance is: ${this.balance}`);
//   }
//   addDeposit(account: number) {
//     this.balance = this.balance + account;
//   }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     this.getBalance();
//   }
// }
// const myAccount = new BankAccount(2733, "Mukta", 100);
// // myAccount.balance = 0; //cannt access coz is private modifier
// console.log(myAccount);
