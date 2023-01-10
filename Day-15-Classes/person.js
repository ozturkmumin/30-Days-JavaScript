class person {
     constructor(firstName, lastName, revenue, expense) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.revenue = revenue;
          this.expense = expense;
     }
     getFullName() {
          const fullName = this.firstName + " " + this.lastName;
          return fullName;
     }
     get getRevenue() {
          return this.revenue;
     }
     get getExpense() {
          return this.expense;
     }

     getPersonInfo() {
          let fullName = this.getFullName();

          let info = `${fullName} is have money  ${this.revenue}. He is monthly expense ${this.expense}.`;
          return info;
     }
}
const Dannis = new person("Dannis", "John", 10.0 + "$", 7.0 + "$");
console.log(Dannis.getPersonInfo());
