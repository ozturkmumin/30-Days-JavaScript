const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
     width: 20,
     height: 10,
     area: 200,
     perimeter: 60,
};
const users = [
     {
          name: "Brook",
          scores: 75,
          skills: ["HTM", "CSS", "JS"],
          age: 16,
     },
     {
          name: "Alex",
          scores: 80,
          skills: ["HTM", "CSS", "JS"],
          age: 18,
     },
     {
          name: "David",
          scores: 75,
          skills: ["HTM", "CSS"],
          age: 22,
     },
     {
          name: "John",
          scores: 85,
          skills: ["HTML"],
          age: 25,
     },
     {
          name: "Sara",
          scores: 95,
          skills: ["HTM", "CSS", "JS"],
          age: 26,
     },
     {
          name: "Martha",
          scores: 80,
          skills: ["HTM", "CSS", "JS"],
          age: 18,
     },
     {
          name: "Thomas",
          scores: 90,
          skills: ["HTM", "CSS", "JS"],
          age: 20,
     },
];
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
let [fin, est, sw, dn, nw] = countries;
let { width, height, area, perimeter } = rectangle;
let [gem, fra, ...nordicCountries] = countries;
console.log(e, pi, gravity, bodyTemp, boilingTemp); // dizinin destructuring işlemini uyguladık ve verileri çektik
console.log(fin, est, sw, dn, nw); // Ülkeler dizisine destructuring işlemi uyguladık
console.log(width, height, area, perimeter);
console.log(gem);
console.log(fra);
console.log(...nordicCountries); // kuzey ülkelerini almış olduk
const students = [
     (student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]),
     (student1 = ["Franc", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]),
     (student2 = ["Mumin", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]),
     (student3 = ["Danis", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]),
     (student4 = ["Umut", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]),
];
const [frontstudie, frontstudie2, frontstudie3, frontstudie4] = students;
console.log(frontstudie);
console.log(frontstudie2);
console.log(frontstudie3);
console.log(frontstudie4); // Öğrencileri arrayin içine alıp destructuring işlemi yaptık

const differentusers = {
     name: "David",
     age: 25,
     skills: {
          frontEnd: [
               { skill: "HTML", level: 10 },
               { skill: "CSS", level: 8 },
               { skill: "JS", level: 8 },
               { skill: "React", level: 9 },
          ],
          backEnd: [
               { skill: "Node", level: 7 },
               { skill: "GraphQL", level: 8 },
          ],
          dataBase: [{ skill: "MongoDB", level: 7.5 }],
          dataScience: ["Python", "R", "D3.js"],
     },
};
const copied = { ...differentusers, skill: "Bootstrap", level: 8 }; // David ' bootstrap özelliği ekledik
const copied2 = { ...differentusers, skill: "Express", level: 9 }; // David ' express özelliği ekledik
const copied3 = { ...differentusers, skill: "SQL ", level: 8 }; // David ' sql özelliği ekledik
const copied4 = { ...differentusers, skill: "SQL " }; // David ' sql özelliği ekledik

console.log(copied, copied2, copied3, copied4);
