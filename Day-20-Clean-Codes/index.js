/* Arrays */
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const languages = ["Amharic", "Arabic", "English", "French", "Spanish"];
const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];

/*Fonksiyonlar*/
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + " " + lastName;

// function which calculates a square of a number
const square = (n) => n * n;

// a function which generate random hexa colors
const hexaColor = () => {
     const str = "0123456789abcdef";
     let hexa = "#";
     let index;
     for (let i = 0; i < 6; i++) {
          index = Math.floor(Math.random() * str.length);
          hexa += str[index];
     }
     return hexa;
};

// a function which shows date and time
const showDateTime = () => {
     const now = new Date();
     const year = now.getFullYear();
     const month = now.getMonth() + 1;
     const date = now.getDate();
     let hours = now.getHours();
     let minutes = now.getMinutes();
     if (hours < 10) {
          hours = "0" + hours;
     }
     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     const dateMonthYear = date + "." + month + "." + year;
     const time = hours + ":" + minutes;
     const fullTime = dateMonthYear + " " + time;
     return fullTime;
};
/*döngüler*/
// declaring object literal
const person = {
     firstName: "Asabeneh",
     lastName: "Yetayeh",
     age: 250,
     country: "Finland",
     city: "Helsinki",
     skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node", "MongoDB", "Python", "D3.js"],
     isMarried: true,
};
// iterating through object keys
for (const key in person) {
     console.log(key, person[key]);
}

/*if else*/
// if else if else if else

let a = 0;
if (a > 0) {
     console.log(`${a} is a positive number`);
} else if (a < 0) {
     console.log(`${a} is a negative number`);
} else if (a == 0) {
     console.log(`${a} is zero`);
} else {
     console.log(`${a} is not a number`);
}
/*Sınıflar*/
// defining class
class Person {
     constructor(firstName, lastName) {
          console.log(this); // Check the output from here
          this.firstName = firstName;
          this.lastName = lastName;
     }
}
